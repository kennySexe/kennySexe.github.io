import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed a conversational AI using natural language processing techniques. Implemented with Python, TensorFlow, and deployed on AWS.",
    image: "/ai-chatbot-interface.png",
    technologies: ["Python", "TensorFlow", "NLP", "AWS", "Flask"],
    github: "https://github.com/alexchen/ai-chatbot",
    demo: "https://ai-chatbot-demo.com",
    type: "Academic Project",
  },
  {
    title: "Stock Price Predictor",
    description:
      "Machine learning model to predict stock prices using historical data and sentiment analysis from news articles.",
    image: "/stock-market-prediction-dashboard.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "React", "D3.js"],
    github: "https://github.com/alexchen/stock-predictor",
    demo: "https://stock-predictor-demo.com",
    type: "Personal Project",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile app for tracking workouts and nutrition with social features and progress analytics.",
    image: "/fitness-tracking-app.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/alexchen/fitness-tracker",
    demo: "https://fitness-tracker-demo.com",
    type: "Team Project",
  },
  {
    title: "3D Puzzle Game",
    description:
      "Interactive 3D puzzle game built with Unity featuring physics-based mechanics and procedural level generation.",
    image: "/3d-puzzle-game-screenshot.jpg",
    technologies: ["Unity", "C#", "Blender", "3D Modeling"],
    github: "https://github.com/alexchen/3d-puzzle-game",
    demo: "https://puzzle-game-demo.com",
    type: "Game Development",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">A showcase of my technical work and creative solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 bg-card overflow-hidden">
              <div className="aspect-video bg-muted/50 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
