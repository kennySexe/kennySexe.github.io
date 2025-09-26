import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Calendar } from "lucide-react"

const publications = [
  {
    title: "Improving Neural Network Efficiency through Adaptive Learning Rates",
    authors: "A. Chen, J. Smith, M. Johnson",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    type: "Conference Paper",
    status: "Published",
    abstract:
      "This paper presents a novel approach to optimizing neural network training through dynamic learning rate adaptation based on gradient behavior analysis.",
    link: "https://arxiv.org/paper/example",
    pdf: "https://example.com/paper.pdf",
  },
  {
    title: "Ethical Considerations in AI-Driven Decision Making Systems",
    authors: "A. Chen, Dr. Sarah Williams",
    venue: "Journal of AI Ethics",
    year: "2024",
    type: "Journal Article",
    status: "Under Review",
    abstract:
      "An exploration of ethical frameworks for AI systems in critical decision-making scenarios, with focus on transparency and accountability.",
    link: "https://example.com/ethics-paper",
    pdf: null,
  },
  {
    title: "Game AI Behavior Trees: A Comparative Analysis",
    authors: "A. Chen",
    venue: "Student Research Symposium",
    year: "2023",
    type: "Poster Presentation",
    status: "Presented",
    abstract:
      "Comparative study of different AI behavior tree implementations in game development, analyzing performance and flexibility.",
    link: "https://example.com/poster",
    pdf: "https://example.com/poster.pdf",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground text-lg">Research contributions and academic presentations</p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="border-0 bg-card/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-balance leading-tight">{pub.title}</CardTitle>
                    <p className="text-muted-foreground mb-2">{pub.authors}</p>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-medium text-primary">{pub.venue}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{pub.type}</Badge>
                      <Badge
                        variant={
                          pub.status === "Published"
                            ? "default"
                            : pub.status === "Under Review"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {pub.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    {pub.pdf && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
