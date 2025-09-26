import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Gamepad2, Smartphone, BarChart3, Cpu } from "lucide-react"

const researchAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Exploring neural networks, deep learning architectures, and AI ethics.",
    tags: ["Deep Learning", "Neural Networks", "AI Ethics"],
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    description: "Developing predictive models and studying algorithmic fairness.",
    tags: ["Supervised Learning", "Unsupervised Learning", "Model Optimization"],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Creating interactive experiences and studying game AI systems.",
    tags: ["Unity", "Game AI", "Interactive Design"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Building mobile and web applications with modern frameworks.",
    tags: ["React Native", "Flutter", "Web Development"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets using statistical methods.",
    tags: ["Statistical Analysis", "Data Visualization", "Big Data"],
  },
  {
    icon: Cpu,
    title: "General AI Research",
    description: "Investigating the future of artificial general intelligence.",
    tags: ["AGI", "Cognitive Science", "Research Methods"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Research Interests</h2>
          <p className="text-muted-foreground text-lg">Areas of focus in my academic and research pursuits</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <area.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
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
