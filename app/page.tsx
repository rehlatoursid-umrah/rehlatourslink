"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface LinkItemProps {
  href: string
  icon: React.ReactNode
  text: string
  external?: boolean
}

function LinkItem({ href, icon, text, external = false }: LinkItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const ripple = document.createElement("span")
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(189, 135, 43, 0.3);
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `

    e.currentTarget.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }

  return (
    <a
      href={href}
      className="link-item"
      onClick={handleClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="link-icon">{icon}</div>
      <span className="link-text">{text}</span>
    </a>
  )
}

export default function RehlaTours() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-burgundy: #68224b;
          --accent-gold: #bd872b;
          --white: #ffffff;
          --light-bg: #f8f5f2;
          --shadow: rgba(104, 34, 75, 0.15);
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, var(--primary-burgundy) 0%, #4a1835 100%);
          min-height: 100vh;
          padding: 2rem 1rem;
          position: relative;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(189, 135, 43, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(189, 135, 43, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .header {
          text-align: center;
          margin-bottom: 2.5rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .header-image {
          width: 100%;
          max-width: 200px;
          height: auto;
          margin: 0 auto 1.5rem;
          display: block;
          animation: scaleIn 0.6s ease-out;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }

        .logo-wrapper {
          margin-bottom: 1.5rem;
          animation: scaleIn 0.6s ease-out;
        }

        .logo {
          width: 120px;
          height: auto;
          transition: transform 0.3s ease;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.75rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.5px;
        }

        .tagline {
          font-size: 1rem;
          font-weight: 300;
          color: var(--light-bg);
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .links-section {
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .section-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          padding-left: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title::before {
          content: '';
          width: 4px;
          height: 16px;
          background: var(--accent-gold);
          border-radius: 2px;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--white);
          padding: 1rem 1.25rem;
          margin-bottom: 0.75rem;
          border-radius: 12px;
          text-decoration: none;
          color: var(--primary-burgundy);
          font-weight: 500;
          font-size: 0.95rem;
          box-shadow: 0 4px 12px var(--shadow);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          opacity: ${mounted ? "1" : "0"};
          transform: ${mounted ? "translateY(0)" : "translateY(20px)"};
        }

        .link-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(189, 135, 43, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .link-item:hover::before {
          left: 100%;
        }

        .link-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(104, 34, 75, 0.25);
          background: linear-gradient(135deg, var(--white) 0%, #faf8f6 100%);
        }

        .link-item:active {
          transform: translateY(-1px);
        }

        .link-icon {
          width: 40px;
          height: 40px;
          background: var(--primary-burgundy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .link-item:hover .link-icon {
          background: var(--accent-gold);
          transform: rotate(10deg) scale(1.1);
        }

        .link-icon svg {
          width: 20px;
          height: 20px;
          fill: var(--white);
        }

        .link-text {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .footer {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .footer-text {
          color: var(--light-bg);
          font-size: 0.875rem;
          font-weight: 300;
        }

        .footer-text strong {
          color: var(--accent-gold);
          font-weight: 600;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          body {
            padding: 1.5rem 1rem;
          }

          .title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 0.9rem;
          }

          .link-item {
            padding: 0.875rem 1rem;
            font-size: 0.9rem;
          }

          .link-icon {
            width: 36px;
            height: 36px;
          }

          .link-icon svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 400px) {
          .title {
            font-size: 1.75rem;
          }

          .tagline {
            font-size: 0.85rem;
          }

          .section-title {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <img src="/rehla-putih.png" alt="RehlaTours.id Logo" className="header-image" />
          <p className="tagline">
            Bersama kami menuju Baitullah dengan perjalanan yang nyaman & penuh keberkahan – Teman Umrah
          </p>
        </header>

        <section className="links-section">
          <h2 className="section-title">Customer Service</h2>

          <LinkItem
            href="https://umrah.rehlatours.id"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            }
            text="Formulir Pendaftaran"
          />

          <LinkItem
            href="https://wa.link/tx1g8i"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            text="Custom Paket Keberangkatan"
          />

          <LinkItem
            href="https://wa.link/cc85im"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            }
            text="Konfirmasi Pembayaran via WhatsApp"
          />

          <LinkItem
            href="mailto:payment@rehlatours.id"
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            }
            text="Konfirmasi Pembayaran via Email"
          />
        </section>

        <section className="links-section">
          <h2 className="section-title">Informasi Umum</h2>

          <LinkItem
            href="https://rehlatours.id"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            }
            text="Website Official"
          />

          <LinkItem
            href="https://wa.link/8rvjap"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            text="WhatsApp Official"
          />

          <LinkItem
            href="https://www.tiktok.com/@rehlatours.id"
            external
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            }
            text="TikTok Official"
          />

          <LinkItem
            href="mailto:inquiry@rehlatours.id"
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
              </svg>
            }
            text="Permintaan via Email"
          />

          <LinkItem
            href="mailto:layananpengaduan@rehlatours.id"
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </svg>
            }
            text="Layanan Pengaduan, Kritik & Saran"
          />
        </section>

        <section className="links-section">
          <h2 className="section-title">Kerja Sama</h2>

          <LinkItem
            href="mailto:inquiry@rehlatours.id?subject=Pendaftaran%20Agen%20Resmi"
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            }
            text="Pendaftaran Agen Resmi"
          />

          <LinkItem
            href="mailto:inquiry@rehlatours.id?subject=Penawaran%20Kerjasama%20Vendor"
            icon={
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
              </svg>
            }
            text="Penawaran Kerjasama Vendor"
          />
        </section>

        <footer className="footer">
          <p className="footer-text">
            © 2025 <strong>RehlaTours.id</strong> - Teman Umrah Anda
          </p>
        </footer>
      </div>
    </>
  )
}
