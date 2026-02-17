import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  nombre: string; email: string; telefono: string; esEmergencia: boolean; servicio: string; ubicacion: string; mensaje: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()
    if (!data.nombre || !data.email || !data.telefono || !data.servicio || !data.ubicacion) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString('es-GT', { timeZone: 'America/Guatemala' })
    const rowData = [timestamp, data.nombre, data.email, data.telefono, data.esEmergencia ? '🚨 SÍ - EMERGENCIA' : 'No', data.servicio, data.ubicacion, data.mensaje || '-']

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (googleScriptUrl) {
      try { await fetch(googleScriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'addLead', data: rowData }) }) }
      catch (e) { console.error('Error Google Sheets:', e) }
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'bettypazalvarado@gmail.com'
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'Landing Elizabeth Paz <onboarding@resend.dev>',
            to: [notificationEmail],
            subject: data.esEmergencia ? `🚨 EMERGENCIA - Nuevo lead: ${data.nombre}` : `📩 Nuevo lead: ${data.nombre}`,
            html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;"><div style="background:#0D4A3E;padding:20px;text-align:center;"><h1 style="color:#C5A851;margin:0;">Nuevo Lead</h1></div>${data.esEmergencia ? '<div style="background:#DC2626;color:white;padding:15px;text-align:center;"><strong>⚠️ EMERGENCIA ⚠️</strong></div>' : ''}<div style="padding:30px;background:#f9fafb;"><p><strong>Nombre:</strong> ${data.nombre}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Teléfono:</strong> ${data.telefono} <a href="https://wa.me/502${data.telefono.replace(/[^0-9]/g, '')}">📱 WhatsApp</a></p><p><strong>Emergencia:</strong> ${data.esEmergencia ? '🚨 SÍ' : 'No'}</p><p><strong>Servicio:</strong> ${data.servicio}</p><p><strong>Ubicación:</strong> ${data.ubicacion}</p><p><strong>Mensaje:</strong> ${data.mensaje || '-'}</p></div><div style="background:#0D4A3E;padding:15px;text-align:center;"><p style="color:#C5A851;margin:0;font-size:12px;">Recibido: ${timestamp}</p></div></div>`,
          }),
        })
      } catch (e) { console.error('Error email:', e) }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
