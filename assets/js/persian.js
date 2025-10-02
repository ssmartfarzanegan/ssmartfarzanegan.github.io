document.addEventListener('DOMContentLoaded', function() {
    // اضافه کردن فونت
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/earlyaccess/bnazanin.css';
    document.head.appendChild(fontLink);
    
    // اعمال تغییرات
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'fa');
    document.body.classList.add('rtl-layout');
    
    // اعمال فونت به عناوین
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.style.fontFamily = 'B Nazanin, Vazir, Tahoma, sans-serif';
        heading.style.direction = 'rtl';
        heading.style.textAlign = 'right';
        heading.style.fontWeight = 'bold';
    });
});

// در فایل persian.js اضافه کنید (قبل از بستن تابع)
function fixNavigationFont() {
    // انتخاب تمام المنت‌های احتمالی navigation
    const navSelectors = [
        '.nav__list',
        '.navigation',
        '.navbar', 
        '.menu',
        '.main-nav',
        '.nav-menu',
        '.header-nav',
        '[class*="nav"]',
        '[class*="menu"]'
    ];
    
    navSelectors.forEach(selector => {
        const navElements = document.querySelectorAll(selector);
        navElements.forEach(element => {
            element.style.fontFamily = 'B Nazanin, Vazir, Tahoma, sans-serif';
            element.style.direction = 'rtl';
            element.style.textAlign = 'right';
        });
    });
    
    // آیتم‌های منو
    const menuItemSelectors = [
        '.nav__item',
        '.menu-item',
        '.nav-item',
        '.navigation-item',
        'li.menu-item'
    ];
    
    menuItemSelectors.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach(item => {
            item.style.fontFamily = 'B Nazanin, Vazir, Tahoma, sans-serif';
            item.style.marginLeft = '1.5em';
            item.style.marginRight = '0';
        });
    });
}

// فراخوانی تابع
fixNavigationFont();