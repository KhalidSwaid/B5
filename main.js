class Cryptocurrency {
    name;
    symbol;
    price;
    marketCap;
    volume;
    subVolume;
    circulatingSupply;
    change24h;
    change7d;
    change1h;
    last7d;
    image;

    constructor(
        name,
        symbol,
        price,
        marketCap,
        volume,
        subVolume,
        circulatingSupply,
        change24h,
        change7d,
        change1h,
        last7d,
        image,
    ) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.marketCap = marketCap;
        this.volume = volume;
        this.subVolume = subVolume;
        this.circulatingSupply = circulatingSupply;
        this.change24h = change24h;
        this.change7d = change7d;
        this.change1h = change1h;
        this.last7d = last7d;
        this.image = image;
    }

    get name() {
        return this.name;
    }

    get symbol() {
        return this.symbol;
    }

    get price() {
        return this.price;
    }

    get marketCap() {
        return this.marketCap;
    }

    get volume() {
        return this.volume;
    }

    get circulatingSupply() {
        return this.circulatingSupply;
    }

    get change24h() {
        return this.change24h;
    }

    get change7d() {
        return this.change7d;
    }

    get change1h() {
        return this.change1h;
    }

    get last7d() {
        return this.last7d;
    }

    get image() {
        return this.image;
    }

    set name(name) {
        this.name = name;
    }

    set symbol(symbol) {
        this.symbol = symbol;
    }

    set price(price) {
        this.price = price;
    }

    set marketCap(marketCap) {
        this.marketCap = marketCap;
    }

    set volume(volume) {
        this.volume = volume;
    }

    set circulatingSupply(circulatingSupply) {
        this.circulatingSupply = circulatingSupply;
    }

    set change24h(change24h) {
        this.change24h = change24h;
    }

    set change7d(change7d) {
        this.change7d = change7d;
    }

    set change1h(change1h) {
        this.change1h = change1h;
    }

    set last7d(last7d) {
        this.last7d = last7d;
    }

    set image(image) {
        this.image = image;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cryptocurrencies = [
        new Cryptocurrency(
            "Bitcoin",
            "BTC",
            "$44,289.77",
            "$886,421,532,759",
            "$20,900,227,029",
            "473,040 BTC", //subVolume
            "19,621,393 BTC",
            "0.01%",
            "0.25%",
            "0.09%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
            "images/Bitcoin.svg.webp",
        ),
        new Cryptocurrency(
            "Ethereum",
            "ETH",
            "$2,421.84",
            "$290,996,327,495",
            "$9,914,022,528",
            "4,095,398 ETH", //subVolume
            "120,180,273 ETH",
            "2.56%",
            "6.80%",
            "0.13%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg",
            "images/Ethereum_logo_2014.svg.png",
        ),
        new Cryptocurrency(
            "Litecoin",
            "LTC",
            "$130.24",
            "$8,620,000,000",
            "$3,200,000,000",
            "45,257,243 LTC",
            "66,752,415 LTC",
            "-0.15%",
            "1.84%",
            "-0.05%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5.svg",
            "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
        ),
        new Cryptocurrency(
            "Ripple",
            "XRP",
            "$0.758",
            "$35,000,000,000",
            "$1,500,000,000",
            "66,734,854,821 XRP",
            "45,000,000,000 XRP",
            "0.10%",
            "0.50%",
            "0.20%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3.svg",
            "https://w7.pngwing.com/pngs/745/641/png-transparent-ripple-xrp-cryptocoins-icon-thumbnail.png",
        ),
        new Cryptocurrency(
            "Cardano",
            "ADA",
            "$1.12",
            "$36,000,000,000",
            "$4,000,000,000",
            "7,367,045,492 ADA",
            "31,112,484,646 ADA",
            "-0.03%",
            "2.76%",
            "0.13%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg",
            "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png",
        ),
        new Cryptocurrency(
            "Polkadot",
            "DOT",
            "$25.67",
            "$25,500,000,000",
            "$2,300,000,000",
            "320,312,144 DOT",
            "987,579,315 DOT",
            "0.12%",
            "3.10%",
            "-0.09%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5.svg",
            "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        ),
        new Cryptocurrency(
            "Chainlink",
            "LINK",
            "$22.85",
            "$10,000,000,000",
            "$1,200,000,000",
            "65,474,924 LINK",
            "440,000,000 LINK",
            "-0.25%",
            "4.02%",
            "0.21%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6.svg",
            "https://cryptologos.cc/logos/chainlink-link-logo.png",
        ),
        new Cryptocurrency(
            "Dogecoin",
            "DOGE",
            "$0.2024",
            "$26,500,000,000",
            "$800,000,000",
            "9,821,852,118 DOGE",
            "130,000,000,000 DOGE",
            "-0.11%",
            "1.45%",
            "-0.03%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1500.svg",
            "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        ),
        new Cryptocurrency(
            "Solana",
            "SOL",
            "$95.24",
            "$27,000,000,000",
            "$2,700,000,000",
            "25,664,870 SOL",
            "272,637,428 SOL",
            "0.32%",
            "5.00%",
            "0.24%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1700.svg",
            "https://cryptologos.cc/logos/solana-sol-logo.png",
        ),
        new Cryptocurrency(
            "Uniswap",
            "UNI",
            "$18.50",
            "$11,000,000,000",
            "$350,000,000",
            "53,204,710 UNI",
            "600,000,000 UNI",
            "0.20%",
            "3.30%",
            "0.15%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1210.svg",
            "https://cryptologos.cc/logos/uniswap-uni-logo.png",
        ),
        new Cryptocurrency(
            "Binance Coin",
            "BNB",
            "$332.00",
            "$52,000,000,000",
            "$1,400,000,000",
            "4,335,531 BNB",
            "153,432,897 BNB",
            "0.18%",
            "2.90%",
            "0.11%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
        ),
        new Cryptocurrency(
            "Avalanche",
            "AVAX",
            "$64.32",
            "$14,300,000,000",
            "$707,000,000",
            "18,580,423 AVAX",
            "220,286,577 AVAX",
            "-0.12%",
            "6.00%",
            "-0.08%",
            "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/122.svg",
            "https://cryptologos.cc/logos/avalanche-avax-logo.png",
        ),
    ];

    const tableBody = document.getElementById("dataTable");
    // tableBody.innerHTML = "<thead><tr><th class='py-2 px-4 border-b'>#</th><th class='py-2 px-4 border-b'>Name</th><th class='py-2 px-4 border-b'>Price</th><th class='py-2 px-4 border-b'>1h%</th><th class='py-2 px-4 border-b'>24h%</th><th class='py-2 px-4 border-b'>7d%</th><th class='py-2 px-4 border-b'>Market Cap</th><th class='py-2 px-4 border-b'>Volume</th><th class='py-2 px-4 border-b'>Circulating Supply</th><th class='py-2 px-4 border-b'>Last 7 days</th></tr></thead>"; // Clear existing table rows, if any

    cryptocurrencies.forEach((crypto, index) => {
        const row = document.createElement("tr");

        // Creating and appending the # cell
        let cell = document.createElement("td");
        cell.className = "py-2 px-4 border-b";
        cell.style = "text-align: center"; // Styling as per your setup
        cell.textContent = index + 1;
        row.appendChild(cell);

        // Creating and appending the Name cell with image
        cell = document.createElement("td");
        const image = document.createElement("img");
        image.src = crypto.image;
        image.alt = `${crypto.name} Logo`;
        image.className = "w-6 h-6 mr-2"; // Add your classes here
        cell.appendChild(image);
        cell.appendChild(document.createTextNode(crypto.name));
        cell.className = "py-2 px-4 flex items-left justify-start mt-2.5 mr-5"; // Add your classes here
        row.appendChild(cell);

        // Price
        cell = document.createElement("td");
        cell.className = "py-2 px-4 border-b text-center";
        cell.textContent = crypto.price;
        row.appendChild(cell);

        // Change 1h
        cell = createChangeElement(crypto.change1h);
        row.appendChild(cell);

        // Change 24h
        cell = createChangeElement(crypto.change24h);
        row.appendChild(cell);

        // Change 7d
        cell = createChangeElement(crypto.change7d);
        row.appendChild(cell);

        // Market Cap
        cell = document.createElement("td");
        cell.textContent = crypto.marketCap;
        row.appendChild(cell);

        // Volume
        cell = createVolumeCell(crypto.volume, crypto.subVolume);
        row.appendChild(cell);

        // Circulating Supply
        cell = document.createElement("td");
        cell.className = "py-2 px-4 border-b";
        cell.textContent = crypto.circulatingSupply;
        cell.style = "text-align: center"; // Styling as per your setup
        row.appendChild(cell);

        // Last 7 Days
        cell = document.createElement("td");
        const imgLast7Days = document.createElement("img");
        imgLast7Days.src = crypto.last7d;
        imgLast7Days.loading = "lazy";
        cell.appendChild(imgLast7Days);
        row.appendChild(cell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    const button = document.getElementById("englishButton"); //get language toggle bar button
    const dropdown = document.getElementById("language-dropdown-menu"); //get language dropdown menu

    const searchInput = document.getElementById("search-navbar"); //get the search input element

    const toolsButton = document.getElementById("dropdownHoverButton");
    const dropDownTools = document.getElementById("dropdownHover");
    //Adding event listener to the search input for capturing 'Enter' keypress
    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                //Capture the search when 'Enter' has been pressed
                const searchTerm = event.target.value;
                console.log("You searched for: " + searchTerm);

                // Clear the search input and set placeholder text
                event.target.value = "";
                event.target.placeholder = "Search...";
            }
        });
    }

    toolsButton.addEventListener("mouseover", function () {
        const rect = toolsButton.getBoundingClientRect();

        dropDownTools.style.position = "absolute";
        dropDownTools.style.left = rect.left + "px";
        dropDownTools.style.top = rect.bottom + "px";

        // dropDownTools.style.width = `${rect.width}px`;

        dropDownTools.classList.remove("hidden");
    });

    toolsButton.addEventListener("mouseot", function () {
        dropDownTools.classList.add("hidden");
    });
    // Add a click event listener to the language dropdown toggle button
    button.addEventListener("click", function () {
        const rect = button.getBoundingClientRect();
        // Calculate the position to open the dropdown below the button
        dropdown.style.left = rect.left + "px";
        dropdown.style.top = rect.bottom + "px";

        // Toggle the visibility of the language dropdown
        dropdown.classList.toggle("hidden");
    });

    // Add a global click event listener to close the dropdown when clicking outside the button and dropdown
    document.addEventListener("click", function (event) {
        if (
            !button.contains(event.target) &&
            !dropdown.contains(event.target)
        ) {
            // Close the dropdown if the click is outside the button and dropdown
            dropdown.classList.add("hidden");
        }
    });

    document.addEventListener("mouseout", function (event) {
        if (
            !toolsButton.contains(event.target) &&
            !dropDownTools.contains(event.target)
        ) {
            dropDownTools.classList.add("hidden");
        }
    });
});

function createChangeElement(change) {
    const changeNegative = change.includes("-");

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "w-2.5 h-2.5 ms-3");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 10 6");

    // Create PATH element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("d", changeNegative ? "m1 1 4 4 4-4" : "m1 5 4-4 4 4");

    // Append PATH to SVG
    svg.appendChild(path);

    const second_span = document.createElement("span");
    second_span.style = "width: 12px; height: 18px; display: inline-block;";
    if (changeNegative) {
        second_span.className = "text-red-500 mr-3 ml-3 mt-2"; // Add your classes here
    } else {
        second_span.className = "text-green-500 mr-3 ml-3 mt-2"; // Add your classes here
    }

    second_span.appendChild(svg);

    const first_span = document.createElement("span");
    if (changeNegative) {
        first_span.className = "flex items-center text-red-500"; // Add your classes here
    } else {
        first_span.className = "flex items-center text-green-500"; // Add your classes here
    }

    first_span.appendChild(second_span);
    first_span.appendChild(document.createTextNode(change));

    const td = document.createElement("td");
    td.className = "py-2 px-4 border-b";

    td.appendChild(first_span);

    return td;
}

function createVolumeCell(volume, subVolume) {
    const td = document.createElement("td");
    td.className = "py-2 px-4 border-b";
    td.style = "text-align: end";

    const div = document.createElement("div");

    const a = document.createElement("a");
    a.href = "#";
    const p = document.createElement("p");
    p.className = "font-medium";
    p.textContent = volume;

    a.appendChild(p);

    const second_div = document.createElement("div");
    const second_p = document.createElement("p");
    second_p.className = "text-slate-400";
    second_p.textContent = subVolume;

    second_div.appendChild(second_p);

    div.appendChild(a);
    div.appendChild(second_div);

    td.appendChild(div);
    return td;
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode class on the body
    body.classList.toggle('dark');

    // Save user preference in localStorage
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);

    // Update button text based on mode
    updateButtonText(isDarkMode);
});

// Function to update button text based on mode
function updateButtonText(isDarkMode) {
    darkModeToggle.textContent = isDarkMode ? 'Light' : 'Dark';
}

// Check user preference from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark');
    updateButtonText(true);
} else {
    body.classList.remove('dark');
    updateButtonText(false);
}



