document.addEventListener("DOMContentLoaded", () => {
  // ===== CEK APAKAH companyData TERSEDIA =====
  if (typeof companyData === 'undefined') {
    console.error('❌ companyData tidak ditemukan! Pastikan content.js diload dengan benar.');
    return;
  }

  console.log('✅ companyData berhasil dimuat!');

  try {
    // ===== 1. HERO SECTION =====
    const heroTitle = document.getElementById("hero-title");
    const heroTagline = document.getElementById("hero-tagline");
    
    if (heroTitle) {
      heroTitle.textContent = companyData.company.name;
      console.log('✅ Hero title diisi:', companyData.company.name);
    }
    if (heroTagline) {
      heroTagline.textContent = companyData.company.tagline;
      console.log('✅ Hero tagline diisi:', companyData.company.tagline);
    }

    // ===== 2. ABOUT SECTION =====
    const aboutDesc = document.getElementById("about-desc");
    if (aboutDesc) {
      aboutDesc.textContent = companyData.company.description;
      console.log('✅ About description diisi');
    } else {
      console.warn('⚠️ Element #about-desc tidak ditemukan!');
    }

    // ===== 3. SERVICES SECTION =====
    const servicesList = document.getElementById("services-list");
    if (servicesList && companyData.services) {
      servicesList.innerHTML = "";
      companyData.services.forEach((service, index) => {
        servicesList.innerHTML += `
          <div class="col-sm-6 col-lg-3">
            <div class="card h-100 border-0 shadow-sm p-4 text-center" style="border-top: 4px solid var(--amber-heavy) !important;">
              <div class="mb-3" style="color: var(--amber-heavy);"><i class="fa-solid ${service.icon} fs-3"></i></div>
              <h5 class="fw-bold text-dark fs-6 mb-2">${service.title}</h5>
              <p class="text-muted small mb-0" style="line-height: 1.6;">${service.desc}</p>
            </div>
          </div>
        `;
      });
      console.log('✅ Services diisi:', companyData.services.length, 'item');
    }

    // ===== 4. STRENGTHS SECTION =====
    const strengthsList = document.getElementById("strengths-list");
    if (strengthsList && companyData.strengths) {
      strengthsList.innerHTML = "";
      companyData.strengths.forEach((item, index) => {
        strengthsList.innerHTML += `
          <div class="col-sm-6 col-lg-3">
            <div class="card h-100 border-0 shadow-sm p-4 text-center">
              <div class="mb-3" style="color: var(--amber-heavy);"><i class="fa-solid ${item.icon} fs-3"></i></div>
              <h5 class="fw-bold text-dark fs-6 mb-2">${item.title}</h5>
              <p class="text-muted small mb-0" style="line-height: 1.6;">${item.desc}</p>
            </div>
          </div>
        `;
      });
      console.log('✅ Strengths diisi:', companyData.strengths.length, 'item');
    }

    // ===== 5. CLIENTS SECTION =====
    const clientsList = document.getElementById("clients-list");
    if (clientsList && companyData.clients) {
      clientsList.innerHTML = "";
      companyData.clients.forEach(client => {
        clientsList.innerHTML += `
          <div class="col-6 col-sm-4 col-md-3 text-center d-flex align-items-center justify-content-center p-3 client-logo-container">
            <img src="${client.logo}" alt="${client.name}" title="${client.name}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `;
      });
      console.log('✅ Clients diisi:', companyData.clients.length, 'item');
    }

    // ===== 6. EXPERIENCE SECTION =====
    const experienceList = document.getElementById("experience-list");
    if (experienceList && companyData.experience) {
      experienceList.innerHTML = "";
      companyData.experience.forEach(item => {
        experienceList.innerHTML += `
          <li class="list-group-item border-0 py-3 d-flex align-items-center justify-content-center text-start">
            <span class="me-3 fs-5" style="color: var(--amber-heavy);">✓</span>
            <span class="text-secondary small fw-medium" style="letter-spacing: 0.3px;">${item}</span>
          </li>
        `;
      });
      console.log('✅ Experience diisi:', companyData.experience.length, 'item');
    }

    // ===== 7. PROJECTS SECTION =====
    const projectsList = document.getElementById("projects-list");
    if (projectsList && companyData.projects) {
      projectsList.innerHTML = "";
      companyData.projects.forEach(project => {
        projectsList.innerHTML += `
          <div class="col-sm-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm overflow-hidden">
              <div style="height: 220px; overflow: hidden; background-color: #eaeaea;">
                <img src="${project.image}" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" alt="${project.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23e2e8f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%2394a3b8%22 font-family=%22sans-serif%22 font-size=%2216%22%3ENo Image%3C/text%3E%3C/svg%3E'">
              </div>
              <div class="card-body p-4">
                <h5 class="fw-bold text-dark h6 mb-2" style="min-height: 40px; line-height: 1.4;">${project.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-light">
                  <span class="badge bg-light text-secondary fw-normal px-2 py-1.5"><i class="fa-solid fa-map-marker-alt me-1 text-warning"></i>${project.location}</span>
                  <small class="text-muted fw-semibold">${project.year || 'Proyek'}</small>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      console.log('✅ Projects diisi:', companyData.projects.length, 'item');
    }

    // ===== 8. CONTACT SECTION =====
    const contactAddress = document.getElementById("contact-address");
    const contactPhone = document.getElementById("contact-phone");
    const contactEmail = document.getElementById("contact-email");

    if (contactAddress && companyData.company.address) {
      contactAddress.innerHTML = `<i class="fa-solid fa-map-marker-alt text-warning me-2"></i>${companyData.company.address}`;
    }
    if (contactPhone && companyData.company.phone) {
      contactPhone.innerHTML = `<i class="fa-solid fa-phone text-warning me-2"></i>${companyData.company.phone}`;
    }
    if (contactEmail && companyData.company.email) {
      contactEmail.innerHTML = `<i class="fa-solid fa-envelope text-warning me-2"></i>${companyData.company.email}`;
    }
    console.log('✅ Contact diisi');

    // ===== 9. FLOATING BUTTONS =====
    const waButton = document.getElementById("wa-float");
    if (waButton && companyData.company.whatsapp) {
      waButton.href = `https://wa.me/${companyData.company.whatsapp}?text=Halo%20PT%20Wadah%20Karya%20Persada%2C%20saya%20ingin%20konsultasi%20proyek.`;
      console.log('✅ WhatsApp button diisi');
    }

    const emailButton = document.getElementById("email-float");
    if (emailButton && companyData.company.email) {
      emailButton.href = `mailto:${companyData.company.email}?subject=Permintaan%20Penawaran%20Proyek`;
      console.log('✅ Email button diisi');
    }

    // ===== 10. SCROLL PROGRESS BAR =====
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = document.getElementById('scroll-progress');
      if (progress) {
        progress.style.width = (winScroll / height) * 100 + '%';
      }
    });

    console.log('✅ Website PT. Wadah Karya Persada berhasil dimuat! 🚀');

  } catch (error) {
    console.error('❌ Error saat memuat data:', error);
  }
});