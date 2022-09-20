export const getJsonList = async (url = '') => {
    const response = await fetch(url);
    const productList = await response.json();
    return productList;
};

export const generateCardList = (list = [], container = null, template = null) => {
    // Kiürítem a befogadó elemet, hogy ne maradjanak benne a meglévő tartalmak.
    container.innerHTML = '';
    
    // Bejárom a kapott tömböt és kiolvasom az egyes objektumokat.
    list.forEach( item => {
        // Klónozom a sablont, egy új HTML elembe.
        const element = template.cloneNode();

        // Kiolvasom a sablon belső HTML tartalmát.
        let content = template.innerHTML;

        // Bejárom az adott objektum kulcsait.
        Object.keys(item).forEach( key => {
            // Létrehozok egy regiláris kifejezést, amivel keresem a 
            // sablonban az adott változó helyét.
            const keyRegexp = new RegExp(`{{ *${key} *}}`, 'g');

            // A sablonban az összes előfordulását a változónak kicserélem 
            // az értékére.
            content = content.replace( keyRegexp, item[key] );
        });
        // {{ name }}
        content = content.replace( /\{\{ *[a-zA-Z]+ *\}\}/g, '');

        // Felülírom az új elem tartalmát.
        element.innerHTML = content;

        // Hozzáadom az új elemet a konténerhez (befogadó elemhez).
        container.appendChild(element);        
    });
};
