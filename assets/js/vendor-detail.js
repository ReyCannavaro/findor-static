/* ============================================================
   FINDOR — Vendor Detail Page Logic
   ============================================================ */

function vdInit() {
  const params = findorQueryParams();
  const vendor = findorGetVendorBySlug(params.slug);

  if (!vendor) {
    $('#notFoundState').show();
    return;
  }
  $('#vendorContent').show();
  document.getElementById('pageTitle').textContent = `${vendor.store_name} — Findor`;

  $('#vdGalleryMain').css('background-image', `url('${vendor.image}')`);

  $('#vdBreadcrumb').html(`
    <a href="index.html">Beranda</a>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    <a href="search.html">Jelajahi Vendor</a>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    <span style="color:#374151;font-weight:600;">${vendor.store_name}</span>
  `);

  $('#vdBadges').html(`
    ${vendor.is_verified ? `<span class="vd-badge vd-badge-verified"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Terverifikasi</span>` : ''}
    <span class="vd-badge vd-badge-cat">${vendor.category}</span>
  `);
  $('#vdName').text(vendor.store_name);
  $('#vdRating').html(`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ${vendor.rating_avg.toFixed(1)} <span style="color:#94a3b8;font-weight:500;">(${vendor.review_count} ulasan)</span>
  `);
  $('#vdCity').html(`
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${vendor.city}
  `);
  $('#vdDescription').text(vendor.description);
  $('#vdAddress').text(vendor.address);

  $('#vdServices').html(vendor.services.map(s => `
    <div class="vd-service-card">
      <div class="vd-service-top">
        <span class="vd-service-name">${s.name}</span>
        <span style="text-align:right;">
          <span class="vd-service-price">${findorFormatPrice(s.price_min)} – ${findorFormatPrice(s.price_max)}</span><br>
          <span class="vd-service-unit">/ ${s.unit}</span>
        </span>
      </div>
      <p class="vd-service-desc">${s.description}</p>
    </div>
  `).join(''));

  const minPrice = Math.min(...vendor.services.map(s => s.price_min));
  $('#vdStartPrice').text(findorFormatPrice(minPrice));

  const waMessage = `Halo ${vendor.store_name}, saya menemukan profil Anda di Findor dan tertarik dengan layanan Anda. Bisa tolong info lebih lanjut mengenai ketersediaan dan harga paket?`;
  $('#vdWaBtn').attr('href', findorWaLink(vendor.whatsapp_number, waMessage));

  $('#vdReviewCount').text(`(${vendor.review_count})`);
  $('#vdReviews').html(vendor.reviews.map(r => `
    <div class="vd-review-item">
      <div class="vd-review-head">
        <span class="vd-review-user">${r.user}</span>
        <span class="vd-review-date">${new Date(r.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>
      <div style="margin-bottom:6px;">
        ${Array.from({ length: 5 }, (_, i) => `<svg width="13" height="13" viewBox="0 0 24 24" fill="${i < r.rating ? '#f5a623' : '#e5e7eb'}" stroke="${i < r.rating ? '#f5a623' : '#e5e7eb'}" style="display:inline;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('')}
      </div>
      <p class="vd-review-comment">${r.comment}</p>
    </div>
  `).join(''));

  vdRenderCalendar(vendor);
}

function vdRenderCalendar(vendor) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDow = new Date(year, month, 1).getDay();

  // deterministic pseudo-random "booked" days based on vendor id, for demo purposes only
  let seed = 0;
  for (const ch of vendor.id) seed += ch.charCodeAt(0);
  const bookedDays = new Set();
  for (let i = 0; i < 5; i++) {
    bookedDays.add(((seed * (i + 3)) % daysInMonth) + 1);
  }

  const dows = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  let html = dows.map(d => `<div class="vd-cal-dow">${d}</div>`).join('');
  for (let i = 0; i < firstDow; i++) html += `<div class="vd-cal-day empty"></div>`;
  const today = now.getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const isPast = d < today;
    const isBooked = bookedDays.has(d);
    const cls = isPast ? 'empty' : (isBooked ? 'booked' : 'available');
    html += `<div class="vd-cal-day ${cls}">${isPast ? '' : d}</div>`;
  }
  $('#vdCalendar').html(html);
}

$(function () { vdInit(); });
