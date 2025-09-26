import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Computer Science Student
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">Alex Chen</h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-mono">AI Researcher & Software Developer</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
              Passionate about advancing artificial intelligence through research and building innovative software
              solutions. Currently pursuing Computer Science with a focus on machine learning and data analysis.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <FileText className="w-4 h-4" />
              View Resume
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img src="/professional-headshot-of-computer-science-student.jpg" alt="Alex Chen" className="w-72 h-72 rounded-xl object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
