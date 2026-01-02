import { useState } from 'react'
import { 
  Menu, 
  X, 
  Bookmark, 
  Palette, 
  Search, 
  GripVertical, 
  Download, 
  Shield, 
  Globe,
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
  FileDown,
  Settings,
  Plus,
  Check
} from 'lucide-react'

interface OnboardingStep {
  title: string
  description: string
  content: React.ReactNode
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardingStep, setOnboardingStep] = useState(0)

  const onboardingSteps: OnboardingStep[] = [
    {
      title: "Welcome to HomeBase",
      description: "A beautiful, customizable new tab page with organized bookmarks, themes, and search functionality.",
      content: (
        <div className="flex flex-col items-center gap-6">
          <img src="/homebase-logo.png" alt="HomeBase" className="w-24 h-24 rounded-2xl" />
          <div className="text-center">
            <p className="text-slate-300 mb-4">
              HomeBase replaces your new tab with a personalized dashboard where you can organize all your important links.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Check className="w-4 h-4 text-green-400" />
              <span>Works offline</span>
              <span className="mx-2">|</span>
              <Check className="w-4 h-4 text-green-400" />
              <span>No account needed</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Install",
      description: "Follow these simple steps to add HomeBase to Chrome.",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold text-sm">1</span>
            <div>
              <p className="text-white font-medium">Download from GitHub</p>
              <p className="text-slate-400 text-sm">Click the button below to go to GitHub, then click "Code" and "Download ZIP"</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold text-sm">2</span>
            <div>
              <p className="text-white font-medium">Enable Developer Mode</p>
              <p className="text-slate-400 text-sm">Go to <code className="bg-slate-700 px-2 py-0.5 rounded text-xs">chrome://extensions/</code> and toggle "Developer mode" ON</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold text-sm">3</span>
            <div>
              <p className="text-white font-medium">Load the Extension</p>
              <p className="text-slate-400 text-sm">Click "Load unpacked" and select the HomeBase folder from the ZIP</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <a 
              href="https://github.com/mirabelle514/chrome-extensions" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              Go to GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Getting Started",
      description: "Here's how to use HomeBase once it's installed.",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-white font-medium">Add Bookmarks</p>
              <p className="text-slate-400 text-sm">Fill in the title, URL, and category to add new links</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
              <GripVertical className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <p className="text-white font-medium">Drag & Drop</p>
              <p className="text-slate-400 text-sm">Reorder links by dragging them within or between categories</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <p className="text-white font-medium">Customize Themes</p>
              <p className="text-slate-400 text-sm">Use the sidebar to choose from 5 beautiful themes</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <FileDown className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white font-medium">Backup Your Data</p>
              <p className="text-slate-400 text-sm">Use Export to save your bookmarks before uninstalling</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-amber-300 font-medium">Important: Backup Your Data</p>
                <p className="text-slate-400">Uninstalling the extension will delete your bookmarks. Always export your data before removing HomeBase.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowOnboarding(true)
    setOnboardingStep(0)
  }

  const closeOnboarding = () => {
    setShowOnboarding(false)
    setOnboardingStep(0)
  }

  const nextStep = () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setOnboardingStep(onboardingStep + 1)
    }
  }

  const prevStep = () => {
    if (onboardingStep > 0) {
      setOnboardingStep(onboardingStep - 1)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeOnboarding}
          ></div>
          <div className="relative bg-slate-800 rounded-2xl border border-slate-700 w-full max-w-lg shadow-2xl">
            <button
              onClick={closeOnboarding}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6">
              <div className="flex justify-center gap-2 mb-6">
                {onboardingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === onboardingStep 
                        ? 'bg-blue-500' 
                        : index < onboardingStep 
                          ? 'bg-blue-500/50' 
                          : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                {onboardingSteps[onboardingStep].title}
              </h2>
              <p className="text-slate-400 text-center mb-6">
                {onboardingSteps[onboardingStep].description}
              </p>
              
              <div className="min-h-64">
                {onboardingSteps[onboardingStep].content}
              </div>
              
              <div className="flex justify-between mt-6 pt-4 border-t border-slate-700">
                <button
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    onboardingStep === 0
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                  disabled={onboardingStep === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                {onboardingStep === onboardingSteps.length - 1 ? (
                  <button
                    onClick={closeOnboarding}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get Started
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/homebase-logo.png" alt="HomeBase" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-bold text-white">HomeBase</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#categories" className="text-slate-300 hover:text-white transition-colors">Categories</a>
              <a href="#themes" className="text-slate-300 hover:text-white transition-colors">Themes</a>
              <a href="#install" className="text-slate-300 hover:text-white transition-colors">Install</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a 
                href="https://github.com/mirabelle514/chrome-extensions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <button 
                onClick={handleInstallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Get Extension
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#categories" className="block text-slate-300 hover:text-white transition-colors py-2">Categories</a>
              <a href="#themes" className="block text-slate-300 hover:text-white transition-colors py-2">Themes</a>
              <a href="#install" className="block text-slate-300 hover:text-white transition-colors py-2">Install</a>
              <button 
                onClick={handleInstallClick}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center mt-4"
              >
                Get Extension
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Beautiful
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> New Tab</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A customizable new tab page with organized bookmarks, beautiful themes, and powerful search functionality. Transform your browser into a productivity hub.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleInstallClick}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Add to Chrome
                </button>
                <a 
                  href="https://github.com/mirabelle514/chrome-extensions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </div>
            
            {/* Hero Preview Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6">
                  {/* Mock browser preview */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white text-center">HomeBase</h2>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Search className="w-4 h-4" />
                        <span className="text-sm">Search your links...</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-xs text-blue-400 mb-1">Work</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-slate-600 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-600 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-xs text-purple-400 mb-1">Personal</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                          <div className="h-2 bg-slate-600 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to organize your bookmarks and customize your browsing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Bookmark Management */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Bookmark className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bookmark Management</h3>
              <p className="text-slate-400">
                Organize your links into custom categories. Add, edit, and delete bookmarks with ease.
              </p>
            </div>

            {/* Feature 2: Drag & Drop */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <GripVertical className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop</h3>
              <p className="text-slate-400">
                Reorder links and move them between categories with intuitive drag and drop controls.
              </p>
            </div>

            {/* Feature 3: Beautiful Themes */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">5 Beautiful Themes</h3>
              <p className="text-slate-400">
                Choose from Elegant Midnight, Modern Tech, Soft Pastel, and more stunning themes.
              </p>
            </div>

            {/* Feature 4: Smart Search */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Search</h3>
              <p className="text-slate-400">
                Find links instantly with real-time filtering. Press Ctrl+F to quickly focus the search.
              </p>
            </div>

            {/* Feature 5: Data Backup */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Backup</h3>
              <p className="text-slate-400">
                Export and import your data anytime. Your bookmarks are safely stored in your browser.
              </p>
            </div>

            {/* Feature 6: Offline Support */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Works Offline</h3>
              <p className="text-slate-400">
                No internet required. Your HomeBase works completely offline with local storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Customize Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"> Experience</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Choose from 5 beautiful built-in themes or create your own custom color combinations. Map any theme color to page elements and save your personalized look.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span>Minimalist Neutral - Clean and simple</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>Elegant Midnight - Dark and sophisticated</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-pink-400" />
                  <span>Soft Pastel - Light and calming</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                  <span>Modern Tech - Clean and professional</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-green-400" />
                  <span>Earthy Organic - Natural and warm</span>
                </li>
              </ul>
            </div>
            
            {/* Theme Preview - Using exact colors from HomeBase extension */}
            <div className="grid grid-cols-2 gap-4">
              {/* Elegant Midnight: primary #0D1B2A, secondary #1B263B, accent #E0A458 */}
              <div className="rounded-xl p-4 border" style={{ background: 'linear-gradient(to bottom right, #0D1B2A, #1B263B)', borderColor: '#1B263B' }}>
                <div className="text-xs mb-2" style={{ color: '#E0A458' }}>Elegant Midnight</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#1B263B' }}></div>
              </div>
              {/* Modern Tech: primary #0F4C81, secondary #1B9AAA, accent #F5A623 */}
              <div className="rounded-xl p-4 border" style={{ background: 'linear-gradient(to bottom right, #0F4C81, #1B9AAA)', borderColor: '#1B9AAA' }}>
                <div className="text-xs mb-2" style={{ color: '#F5A623' }}>Modern Tech</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#1B9AAA' }}></div>
              </div>
              {/* Soft Pastel: primary #A3D2CA, secondary #F7D9D9, accent #FFB085, background #FFFFFF */}
              <div className="rounded-xl p-4 border" style={{ background: 'linear-gradient(to bottom right, #A3D2CA, #F7D9D9)', borderColor: '#F7D9D9' }}>
                <div className="text-xs mb-2" style={{ color: '#444444' }}>Soft Pastel</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}></div>
              </div>
              {/* Earthy Organic: primary #6A994E, secondary #A7C957, accent #BC4749, background #FDF0D5 */}
              <div className="rounded-xl p-4 border" style={{ background: 'linear-gradient(to bottom right, #6A994E, #A7C957)', borderColor: '#A7C957' }}>
                <div className="text-xs mb-2" style={{ color: '#FDF0D5' }}>Earthy Organic</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#FDF0D5' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <Sparkles className="inline w-8 h-8 text-yellow-400 mr-2" />
              Organize Your Way
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Create custom categories, drag and drop your bookmarks, and build the perfect homepage for your workflow.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="text-blue-400 font-medium">Work</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">GitHub</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Slack</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Notion</div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="text-purple-400 font-medium">Personal</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">YouTube</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Netflix</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Spotify</div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="text-green-400 font-medium">Learning</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Udemy</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">Coursera</div>
                  <div className="bg-slate-600/50 rounded-lg p-2 text-sm text-slate-300">MDN Docs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get Started in Minutes</h2>
          <p className="text-xl text-slate-400 mb-12">
            Install HomeBase and transform your new tab page into a beautiful, organized dashboard.
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-left">
            <h3 className="text-xl font-semibold text-white mb-6">Installation Steps</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">1</span>
                <div>
                  <p className="text-white font-medium">Enable Developer Mode</p>
                  <p className="text-slate-400 text-sm">Go to <code className="bg-slate-700 px-2 py-1 rounded">chrome://extensions/</code> and toggle "Developer mode" in the top right</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">2</span>
                <div>
                  <p className="text-white font-medium">Download HomeBase</p>
                  <p className="text-slate-400 text-sm">Clone or download the extension from GitHub</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">3</span>
                <div>
                  <p className="text-white font-medium">Load Extension</p>
                  <p className="text-slate-400 text-sm">Click "Load unpacked" and select the HomeBase folder</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-semibold">4</span>
                <div>
                  <p className="text-white font-medium">Enjoy!</p>
                  <p className="text-slate-400 text-sm">Open a new tab and start organizing your bookmarks</p>
                </div>
              </li>
            </ol>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a 
                href="https://github.com/mirabelle514/chrome-extensions" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/homebase-logo.png" alt="HomeBase" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-bold text-white">HomeBase</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
              <a href="#themes" className="text-slate-400 hover:text-white transition-colors">Themes</a>
              <a href="#install" className="text-slate-400 hover:text-white transition-colors">Install</a>
              <a 
                href="https://github.com/mirabelle514/chrome-extensions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">
              Created by{' '}
              <a 
                href="https://mirabelledoiron.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Mirabelle Doiron
              </a>
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Open source and free to use
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
