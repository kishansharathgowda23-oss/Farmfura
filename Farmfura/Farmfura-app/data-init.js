// Central Data Initialization for Farmfura Portals

function initializeData() {
    const initLocalStorage = (key, defaultData) => {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, JSON.stringify(defaultData));
        }
    };

    // --- PRODUCT DATA (with Barcodes & Storage Locations) ---
    const allProducts = [
        { id: 1, barcode: '5011313800213', name: 'Tomato', price: 30, farmerPrice: 24, category: 'other', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/tomato.jpg', names: { kn: 'ಟೊಮೆಟೊ', hi: 'टमाटर' }, inStock: true, storageLocation: 'Shelf C-1' },
        { id: 2, barcode: '5011313800225', name: 'Potato', price: 25, farmerPrice: 20, category: 'root', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/potato.jpg', names: { kn: 'ಆಲೂಗಡ್ಡೆ', hi: 'आलू' }, inStock: true, storageLocation: 'Bin 3' },
        { id: 3, barcode: '5011313600329', name: 'Onion', price: 28, farmerPrice: 22, category: 'root', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/onion.jpg', names: { kn: 'ಈರುಳ್ಳಿ', hi: 'प्याज' }, inStock: true, storageLocation: 'Bin 4' },
        { id: 4, barcode: '5014933582085', name: 'Carrot', price: 45, farmerPrice: 36, category: 'root', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/carrot.jpg', names: { kn: 'ಕ್ಯಾರೆಟ್', hi: 'गाजर' }, inStock: true, storageLocation: 'Cooler A-2' },
        { id: 5, barcode: '5012518000058', name: 'Ladies Finger', price: 40, farmerPrice: 32, category: 'other', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/ladies%20finger.jpg', names: { kn: 'ಬೆಂಡೆಕಾಯಿ', hi: 'भिंडी' }, inStock: true, storageLocation: 'Shelf C-2' },
        { id: 6,  barcode: '50145354082099', name: 'Brinjal', price: 35, farmerPrice: 28, category: 'other', unit: 'kg', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/brinjal.jpg', names: { kn: 'ಬದನೆಕಾಯಿ', hi: 'बैंगन' }, inStock: true, storageLocation: 'Shelf C-4' },
        { id: 27, barcode: '5011313800430', name: 'Coriander leaves', price: 15, farmerPrice: 12, category: 'leafy', unit: 'bundle', image: 'https://raw.githubusercontent.com/kishansharathgowda23-oss/farmfura-images./main/KISHAN%20D/coriander%20leaves.jpg', names: { kn: 'ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು', hi: 'धनिया पत्ती' }, inStock: true, storageLocation: 'Cooler A-1' }
        // Add more products from your list here if needed
    ];
    initLocalStorage('farmfura_products', allProducts);

    // --- EMPLOYEE DATA ---
    const allEmployees = [
        { id: 'ADMIN', name: 'Admin', role: 'admin', status: 'Active', password: 'admin' },
        { id: 'SGM001', name: 'Sanjay Verma', role: 'supply_grid_manager', status: 'Active', phone: '9111111111', password: 'password123' },
        { id: 'ZM001', name: 'Rajesh Kumar', role: 'zone_manager', status: 'Active', phone: '9000000004', zone: 'Koramangala', password: 'password123' },
        { id: 'ZM002', name: 'Priya Singh', role: 'zone_manager', status: 'Active', phone: '9000000005', zone: 'Indiranagar', password: 'password123' },
        { id: 'SHP001', name: 'Anand Gupta', role: 'shop_owner', status: 'Active', phone: '9000000001', shopName: 'FreshMart', zone: 'Koramangala' },
        { id: 'SHK001', name: 'Sunita Devi', role: 'shopkeeper', status: 'Active', phone: '9000000002', shopName: 'FreshMart', zone: 'Koramangala', scanEarnings: 0 },
        { id: 'BC001', name: 'Rohan Sharma', role: 'bike_carrier', status: 'Active', phone: '9876543211', vehicleType: 'TVS Jupiter', vehicleNumber: 'KA-01-AB-1234', zone: 'Indiranagar', shopName: 'Priya Foods', earnings: 0 },
        { id: '4x4001', name: 'Vikram Singh', role: '4x4_carrier', status: 'Active', phone: '9000000003', vehicleType: 'Mahindra Bolero', vehicleNumber: 'KA-02-CD-5678', password: 'password123' }
    ];
    initLocalStorage('farmfura_employees', allEmployees);

    // --- TRANSACTIONAL DATA ---
    initLocalStorage('farmfura_farmer_submissions', []);
    initLocalStorage('farmfura_bulk_orders', []);
    initLocalStorage('farmfura_pendingOrders', []);
    initLocalStorage('agrifura_logistics_jobs', []);
    initLocalStorage('farmfura_notifications', []);
    initLocalStorage('farmfura_farmerState', {});

    const initialInventory = {};
    allProducts.forEach(p => { initialInventory[p.id] = 100; });
    initLocalStorage('farmfura_supply_grid_inventory', initialInventory);
}

initializeData();