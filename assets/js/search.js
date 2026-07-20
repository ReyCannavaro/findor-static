/* ============================================================
   FINDOR — Search Page Logic (vanilla JS + jQuery)
   ============================================================ */

let sState = { q: '', kategori: 'Semua Kategori', kota: 'Semua Kota', page: 1 };
const PER_PAGE = 9;

function sInit() {
  const params = findorQueryParams();
  if (params.q) sState.q = params.q;
  if (params.kategori) sState.kategori = params.kategori;
  if (params.kota) sState.kota = params.kota;

  $('#searchQueryInput').val(sState.q);
  sRenderDropdown('kategori', FINDOR_CATEGORIES, sState.kategori);
  sRenderDropdown('kota', FINDOR_CITIES, sState.kota);
  sRenderHeroPills();
  sRenderSidebar();
  sApply(false);

  $('#searchQueryInput').on('input', function () {
    $('#clearQueryBtn').toggle(!!$(this).val());
  }).on('focus', function () { $('#searchInputWrap').addClass('focused'); })
    .on('blur', function () { $('#searchInputWrap').removeClass('focused'); })
    .on('keydown', function (e) { if (e.key === 'Enter') sApply(true); });

  $('#clearQueryBtn').on('click', function () {
    $('#searchQueryInput').val('');
    $(this).hide();
    sApply(true);
  });

  $('#btnCari').on('click', () => sApply(true));

  $('#btnOpenDrawer').on('click', () => {
    $('#drawerBackdrop').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });
  $('#drawerBackdrop').on('click', function () {
    $(this).hide();
    $('body').css('overflow', '');
  });
}

function sRenderDropdown(type, options, current) {
  const trigger = $(`#dd${type[0].toUpperCase() + type.slice(1)}Trigger`);
  const menu = $(`#dd${type[0].toUpperCase() + type.slice(1)}Menu`);
  const valueLabel = $(`#dd${type[0].toUpperCase() + type.slice(1)}Value`);

  valueLabel.text(current).toggleClass('selected', current !== options[0]);

  menu.html(options.map(o => `
    <button class="dd-opt ${o === current ? 'active' : ''}" data-val="${o}">${o}</button>
  `).join(''));

  trigger.off('click').on('click', function (e) {
    e.stopPropagation();
    $('.dd-menu').not(menu).hide();
    $('.dd-trigger').not(trigger).removeClass('open');
    menu.toggle();
    trigger.toggleClass('open');
  });

  menu.find('.dd-opt').off('click').on('click', function () {
    const val = $(this).data('val');
    sState[type] = val;
    sRenderDropdown(type, options, val);
    menu.hide();
    trigger.removeClass('open');
    sRenderHeroPills();
    sRenderSidebar();
    sApply(true);
  });
}

$(document).on('click', function () {
  $('.dd-menu').hide();
  $('.dd-trigger').removeClass('open');
});

function sRenderHeroPills() {
  const popularCats = ['Semua Kategori', 'Wedding Organizer', 'Sound System', 'Dekorasi & Florist', 'Catering', 'Photography'];
  $('#heroPills').html(popularCats.map(c => `
    <button class="hero-pill ${sState.kategori === c ? 'active' : ''}" data-cat="${c}">${c}</button>
  `).join(''));
  $('.hero-pill').off('click').on('click', function () {
    const cat = $(this).data('cat');
    sState.kategori = cat;
    sRenderDropdown('kategori', FINDOR_CATEGORIES, cat);
    sRenderHeroPills();
    sRenderSidebar();
    sApply(true);
  });
}

function sRenderSidebar() {
  const html = `
    <div class="filter-panel">
      <div class="filter-panel-header">
        <span style="font-size:14px;font-weight:700;color:#0f172a;display:flex;align-items:center;gap:7px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d3b2e" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> Filter Pencarian
        </span>
      </div>
      <div class="filter-section">
        <p class="filter-label">Kategori</p>
        <div class="filter-kategori-list">
          ${FINDOR_CATEGORIES.map(c => `
            <button class="filter-cat-item ${sState.kategori === c ? 'active' : ''}" data-cat="${c}">${c}</button>
          `).join('')}
        </div>
      </div>
      <div class="filter-section" style="border-bottom:none;">
        <p class="filter-label">Kota</p>
        <div class="filter-kategori-list" style="max-height:220px;">
          ${FINDOR_CITIES.map(c => `
            <button class="filter-cat-item ${sState.kota === c ? 'active' : ''}" data-kota="${c}">${c}</button>
          `).join('')}
        </div>
      </div>
      <div class="filter-actions">
        <button class="filter-btn-reset" id="btnResetSidebar">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg> Reset Filter
        </button>
      </div>
    </div>`;
  $('#sidebarDesktop').html(html);
  $('#sidebarMobile').html(html.replace('id="btnResetSidebar"', 'id="btnResetSidebarMobile"') + `
    <div style="padding:0 18px 4px;">
      <button id="btnApplyMobile" class="filter-btn-apply">Terapkan Filter</button>
    </div>`);

  $('.filter-cat-item[data-cat]').off('click').on('click', function () {
    const cat = $(this).data('cat');
    sState.kategori = cat;
    sRenderDropdown('kategori', FINDOR_CATEGORIES, cat);
    sRenderHeroPills();
    sRenderSidebar();
  });
  $('.filter-cat-item[data-kota]').off('click').on('click', function () {
    const kota = $(this).data('kota');
    sState.kota = kota;
    sRenderDropdown('kota', FINDOR_CITIES, kota);
    sRenderSidebar();
  });
  $('#btnResetSidebar, #btnResetSidebarMobile').off('click').on('click', findorResetFilter);
  $('#btnApplyMobile').off('click').on('click', function () {
    $('#drawerBackdrop').hide();
    $('body').css('overflow', '');
    sApply(true);
  });
}

function findorResetFilter() {
  sState = { q: '', kategori: 'Semua Kategori', kota: 'Semua Kota', page: 1 };
  $('#searchQueryInput').val('');
  $('#clearQueryBtn').hide();
  sRenderDropdown('kategori', FINDOR_CATEGORIES, sState.kategori);
  sRenderDropdown('kota', FINDOR_CITIES, sState.kota);
  sRenderHeroPills();
  sRenderSidebar();
  $('#drawerBackdrop').hide();
  $('body').css('overflow', '');
  sApply(true);
}

function sRenderChips() {
  const chips = [];
  if (sState.kategori !== 'Semua Kategori') chips.push({ key: 'kategori', label: sState.kategori });
  if (sState.kota !== 'Semua Kota') chips.push({ key: 'kota', label: sState.kota });
  if (sState.q) chips.push({ key: 'q', label: `"${sState.q}"` });

  const html = chips.map(c => `
    <span class="chip">${c.label}<button class="chip-x" data-key="${c.key}">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button></span>`).join('') + (chips.length ? `<button class="chip chip-reset" id="chipResetAll">Reset Semua</button>` : '');

  $('#desktopChips, #mobileChips').html(html);
  $('#fabBadge').text(chips.length).toggle(chips.length > 0);

  $('.chip-x').off('click').on('click', function () {
    const key = $(this).data('key');
    if (key === 'kategori') sState.kategori = 'Semua Kategori';
    if (key === 'kota') sState.kota = 'Semua Kota';
    if (key === 'q') { sState.q = ''; $('#searchQueryInput').val(''); $('#clearQueryBtn').hide(); }
    sRenderDropdown('kategori', FINDOR_CATEGORIES, sState.kategori);
    sRenderDropdown('kota', FINDOR_CITIES, sState.kota);
    sRenderHeroPills();
    sRenderSidebar();
    sApply(true);
  });
  $('#chipResetAll').off('click').on('click', findorResetFilter);
}

function sGetFiltered() {
  const q = (sState.q || $('#searchQueryInput').val() || '').toLowerCase().trim();
  return FINDOR_VENDORS.filter(v => {
    if (sState.kategori !== 'Semua Kategori' && v.category !== sState.kategori) return false;
    if (sState.kota !== 'Semua Kota' && v.city !== sState.kota) return false;
    if (q && !(v.store_name.toLowerCase().includes(q) || v.category.toLowerCase().includes(q) || v.description.toLowerCase().includes(q))) return false;
    return true;
  }).sort((a, b) => b.rating_avg - a.rating_avg);
}

function sApply(resetPage) {
  sState.q = $('#searchQueryInput').val();
  if (resetPage) sState.page = 1;
  sRenderChips();
  const filtered = sGetFiltered();
  sRenderResults(filtered);

  const url = new URL(window.location.href);
  url.searchParams.set('kategori', sState.kategori);
  url.searchParams.set('kota', sState.kota);
  if (sState.q) url.searchParams.set('q', sState.q); else url.searchParams.delete('q');
  window.history.replaceState({}, '', url);
}

function sRenderResults(filtered) {
  $('#resultIntro').text(`${filtered.length} vendor tersedia di ${sState.kota === 'Semua Kota' ? 'seluruh Indonesia' : sState.kota}. Bandingkan harga, rating, dan portofolio sebelum booking.`);
  $('#resultCountText').html(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d3b2e" stroke-width="2" style="display:inline;vertical-align:-2px;margin-right:4px;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${filtered.length} Vendor Ditemukan`);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if (sState.page > totalPages) sState.page = totalPages;
  const start = (sState.page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  if (filtered.length === 0) {
    $('#browseGrid').empty();
    $('#emptyState').show();
    $('#paginationWrap').empty();
    return;
  }
  $('#emptyState').hide();

  $('#browseGrid').html(pageItems.map((v, i) => `
    <a href="vendor.html?slug=${v.slug}" class="browse-card card-pop" style="animation-delay:${i * 0.03}s;">
      <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:#f1f5f9;">
        <img src="${v.image}" alt="${v.store_name}" style="width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,0.92);border-radius:100px;padding:3px 9px;font-size:12px;font-weight:700;color:#0d3b2e;display:flex;align-items:center;gap:3px;">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${v.rating_avg.toFixed(1)}
          <span style="color:#94a3b8;font-weight:500;">(${v.review_count})</span>
        </div>
        ${v.is_verified ? `<div style="position:absolute;top:10px;left:10px;background:rgba(255,255,255,0.92);border-radius:100px;padding:3px 9px;font-size:11px;font-weight:700;color:#16a34a;display:flex;align-items:center;gap:3px;">✓ Terverifikasi</div>` : ''}
      </div>
      <div style="padding:16px 18px 18px;">
        <div style="font-size:11px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:4px;">${v.category}</div>
        <div style="font-weight:700;font-size:16px;color:#0f172a;margin-bottom:6px;line-height:1.3;">${v.store_name}</div>
        <div style="display:flex;align-items:center;gap:4px;font-size:12.5px;color:#64748b;margin-bottom:14px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${v.city}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid #f1f5f9;">
          <div>
            <div style="font-size:10.5px;color:#94a3b8;">Mulai dari</div>
            <div style="font-weight:800;font-size:15px;color:#0d3b2e;">${findorFormatHarga(v.services)}</div>
          </div>
          <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:#0d3b2e;">
            Lihat Detail <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>
    </a>
  `).join(''));

  sRenderPagination(totalPages);
}

function sRenderPagination(totalPages) {
  if (totalPages <= 1) { $('#paginationWrap').empty(); return; }
  let html = `<button class="page-btn" ${sState.page === 1 ? 'disabled' : ''} data-page="${sState.page - 1}">←</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - sState.page) <= 1) {
      html += `<button class="page-btn" data-page="${i}" style="${i === sState.page ? 'background:#0d3b2e;color:white;border-color:#0d3b2e;' : ''}">${i}</button>`;
    } else if (Math.abs(i - sState.page) === 2) {
      html += `<span style="padding:0 4px;color:#cbd5e1;">…</span>`;
    }
  }
  html += `<button class="page-btn" ${sState.page === totalPages ? 'disabled' : ''} data-page="${sState.page + 1}">→</button>`;
  $('#paginationWrap').html(html);
  $('.page-btn[data-page]').off('click').on('click', function () {
    const p = parseInt($(this).data('page'));
    if (!p || p < 1) return;
    sState.page = p;
    sRenderResults(sGetFiltered());
    $('html, body').animate({ scrollTop: $('#resultsSection').offset().top - 100 }, 300);
  });
}

$(function () { sInit(); });
