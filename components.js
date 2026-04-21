// components.js - Reusable Navbar & Footer

export function renderNavbar(activePage = '') {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow">
              <span class="text-white font-black text-sm tracking-tight">SFV</span>
            </div>
            <div class="leading-tight">
              <div class="font-black text-slate-900 text-base tracking-tight">SFV Loans</div>
              <div class="text-xs text-slate-500 font-medium -mt-0.5">SFV Sales & Distribution Pvt. Ltd.</div>
            </div>
          </a>

          <!-- Desktop Links -->
          <div class="hidden md:flex items-center gap-1">
            <a href="index.html" class="nav-link ${activePage==='home'?'active':''} px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all">Home</a>
            <a href="loans.html" class="nav-link ${activePage==='loans'?'active':''} px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all">Loans</a>
            <a href="about.html" class="nav-link ${activePage==='about'?'active':''} px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all">About</a>
            <a href="contact.html" class="nav-link ${activePage==='contact'?'active':''} px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all">Contact</a>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center gap-3">
            <a href="login.html" class="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Sign In</a>
            <a href="login.html" class="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 py-2 rounded-lg shadow transition-all hover:shadow-md">Apply Now</a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden pb-4 border-t border-slate-100 pt-3">
          <div class="flex flex-col gap-1">
            <a href="index.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Home</a>
            <a href="loans.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Loans</a>
            <a href="about.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">About</a>
            <a href="contact.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Contact</a>
            <div class="flex gap-2 mt-2">
              <a href="login.html" class="flex-1 text-center text-sm font-semibold border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition">Sign In</a>
              <a href="login.html" class="flex-1 text-center bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <style>
      .nav-link.active { color: #1d4ed8; background: #eff6ff; }
    </style>
  `;

  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });
}

export function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <footer class="bg-slate-900 text-slate-300 pt-14 pb-6 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-black text-sm">SFV</span>
              </div>
              <div>
                <div class="text-white font-black text-base">SFV Loans</div>
                <div class="text-xs text-slate-400">SFV Sales & Distribution Pvt. Ltd.</div>
              </div>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">Fast, transparent and affordable home loans across India. Your dream home is just a loan away.</p>
            <div class="flex gap-3 mt-5">
              <a href="#" class="w-8 h-8 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" class="w-8 h-8 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="#" class="w-8 h-8 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.029 24l6.307-1.655A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.859 0-3.606-.5-5.112-1.373l-.367-.218-3.743.982.999-3.648-.239-.374A9.983 9.983 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="hover:text-white hover:underline transition">Home</a></li>
              <li><a href="loans.html" class="hover:text-white hover:underline transition">Our Loans</a></li>
              <li><a href="about.html" class="hover:text-white hover:underline transition">About Us</a></li>
              <li><a href="contact.html" class="hover:text-white hover:underline transition">Contact</a></li>
              <li><a href="login.html" class="hover:text-white hover:underline transition">Client Login</a></li>
            </ul>
          </div>

          <!-- Loan Products -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Loan Products</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="loans.html#home-loan" class="hover:text-white hover:underline transition">Home Loan</a></li>
              <li><a href="loans.html#lap" class="hover:text-white hover:underline transition">Loan Against Property</a></li>
              <li><a href="loans.html#construction" class="hover:text-white hover:underline transition">Construction Loan</a></li>
              <li><a href="loans.html#eligibility" class="hover:text-white hover:underline transition">Check Eligibility</a></li>
              <li><a href="index.html#emi" class="hover:text-white hover:underline transition">EMI Calculator</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex gap-2 items-start"><span class="text-blue-400 mt-0.5">📍</span><span>Pune, Maharashtra, India — 411001</span></li>
              <li class="flex gap-2 items-center"><span class="text-blue-400">📞</span><a href="tel:+912012345678" class="hover:text-white transition">+91 20 1234 5678</a></li>
              <li class="flex gap-2 items-center"><span class="text-blue-400">✉️</span><a href="mailto:info@sfvloans.in" class="hover:text-white transition">info@sfvloans.in</a></li>
              <li class="flex gap-2 items-center"><span class="text-blue-400">🕐</span><span>Mon–Sat, 9 AM – 6 PM</span></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2025 SFV Sales and Distribution Pvt. Ltd. All rights reserved.</span>
          <div class="flex gap-4">
            <a href="#" class="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" class="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" class="hover:text-slate-300 transition">RERA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function renderChatbot() {
  const el = document.getElementById('chatbot');
  if (!el) return;
  el.innerHTML = `
    <!-- Chatbot Toggle -->
    <div id="chat-toggle" class="fixed bottom-6 right-6 z-50 cursor-pointer">
      <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <svg id="chat-icon-open" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
        <svg id="chat-icon-close" class="w-7 h-7 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
    </div>

    <!-- Chatbot Window -->
    <div id="chat-window" class="hidden fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col" style="height:420px">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-3 flex items-center gap-3">
        <div class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">SFV</div>
        <div>
          <div class="text-white font-bold text-sm">SFV Loan Assistant</div>
          <div class="text-blue-200 text-xs flex items-center gap-1"><span class="w-2 h-2 bg-green-400 rounded-full inline-block"></span>Online</div>
        </div>
      </div>

      <!-- Messages -->
      <div id="chat-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
        <div class="bot-msg flex gap-2 items-end">
          <div class="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">B</div>
          <div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-slate-700 shadow-sm max-w-[85%]">
            👋 Hi! I'm your SFV Loan Assistant. I can help you check loan eligibility. What type of loan are you looking for?
            <div class="flex flex-wrap gap-1 mt-2">
              <button onclick="chatSelect('Home Loan')" class="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1 rounded-full transition">🏠 Home Loan</button>
              <button onclick="chatSelect('LAP')" class="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1 rounded-full transition">🏢 LAP</button>
              <button onclick="chatSelect('Construction Loan')" class="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1 rounded-full transition">🏗 Construction</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-3 border-t border-slate-200 bg-white flex gap-2">
        <input id="chat-input" type="text" placeholder="Type a message..." class="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-50">
        <button id="chat-send" class="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center justify-center transition">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
      </div>
    </div>
  `;
  initChatbot();
}

function initChatbot() {
  const toggle = document.getElementById('chat-toggle');
  const win = document.getElementById('chat-window');
  const iconOpen = document.getElementById('chat-icon-open');
  const iconClose = document.getElementById('chat-icon-close');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  let chatState = { step: 0, loanType: '', income: 0, propertyValue: 0 };

  toggle?.addEventListener('click', () => {
    win?.classList.toggle('hidden');
    iconOpen?.classList.toggle('hidden');
    iconClose?.classList.toggle('hidden');
  });

  sendBtn?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

  window.chatSelect = (val) => {
    addUserMsg(val);
    chatState.loanType = val;
    chatState.step = 1;
    setTimeout(() => addBotMsg('Great choice! What is your monthly income? (in ₹)'), 500);
  };

  function handleSend() {
    const val = input.value.trim();
    if (!val) return;
    input.value = '';
    addUserMsg(val);

    setTimeout(() => {
      if (chatState.step === 1) {
        chatState.income = parseInt(val.replace(/[^0-9]/g, '')) || 0;
        chatState.step = 2;
        addBotMsg('What is the approximate value of the property? (in ₹)');
      } else if (chatState.step === 2) {
        chatState.propertyValue = parseInt(val.replace(/[^0-9]/g, '')) || 0;
        chatState.step = 3;
        const maxEMI = chatState.income * 0.5;
        const rate = 8.5 / 100 / 12;
        const tenure = 240;
        const eligible = maxEMI * ((Math.pow(1 + rate, tenure) - 1) / (rate * Math.pow(1 + rate, tenure)));
        const maxByLTV = chatState.propertyValue * 0.75;
        const finalEligible = Math.min(eligible, maxByLTV);
        addBotMsg(`✅ Based on your details:\n\n📊 <strong>Loan Type:</strong> ${chatState.loanType}\n💰 <strong>Max Eligible Loan:</strong> ₹${Math.round(finalEligible).toLocaleString('en-IN')}\n📅 Based on 20yr tenure & 8.5% interest\n\n<a href="contact.html" class="text-blue-600 underline font-semibold">Talk to our expert →</a>`);
      } else {
        addBotMsg('For more help, please <a href="contact.html" class="text-blue-600 underline">contact us</a> or call +91 20 1234 5678.');
      }
    }, 600);
  }

  function addUserMsg(text) {
    const msgs = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'flex justify-end';
    div.innerHTML = `<div class="bg-blue-700 text-white rounded-2xl rounded-br-sm px-3 py-2 text-sm max-w-[85%]">${text}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addBotMsg(html) {
    const msgs = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'bot-msg flex gap-2 items-end';
    div.innerHTML = `<div class="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">B</div><div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-slate-700 shadow-sm max-w-[85%] whitespace-pre-line">${html}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }
}