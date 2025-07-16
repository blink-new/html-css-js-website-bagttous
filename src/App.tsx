import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { ExternalLink, Github, Mail, Twitter, Linkedin, Code, Zap, Globe } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="logo.png" alt="Erika Labs Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900">Erika Labs</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Building the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Future of Tech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions, cutting-edge technology, and bold ideas that shape tomorrow's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
                Explore Projects
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our latest innovations and breakthrough solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* KairosTag Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-500 text-white">Active</Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  KairosTag
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Revolutionary tagging system with advanced analytics and real-time processing capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">React</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Node.js</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">PostgreSQL</Badge>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A next-generation tagging platform that leverages machine learning to provide intelligent categorization and insights for digital content management.
                </p>
              </CardContent>
            </Card>

            {/* Davis Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500 text-white">Active</Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Davis
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Intelligent data visualization and analytics platform for modern businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Vue.js</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Python</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">FastAPI</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">MongoDB</Badge>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  An advanced analytics dashboard that transforms complex data into actionable insights with beautiful, interactive visualizations and real-time monitoring.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vector API Coming Soon */}
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Vector API</h3>
              <p className="text-xl mb-6 opacity-90">
                Revolutionary vector processing API with lightning-fast performance
              </p>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Powered by Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
              'Vue.js', 'FastAPI', 'Docker', 'AWS', 'GraphQL', 'Redis'
            ].map((tech) => (
              <div key={tech} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
              <Mail className="mr-2 w-5 h-5" />
              Send Message
            </Button>
            <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg">
              Schedule Call
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-indigo-600">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-indigo-600">
              <Twitter className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-indigo-600">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-indigo-600">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="logo.png" alt="Erika Labs Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">Erika Labs</span>
          </div>
          <p className="text-gray-400 mb-4">
            Building the future, one innovation at a time.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Erika Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App