import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Award } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "R", level: 70 },
      { name: "Swift", level: 65 },
    ],
  },
  {
    icon: Database,
    title: "Tools & Technologies",
    skills: [
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "React/Next.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS/GCP", level: 65 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
]

const languages = [
  { name: "English", level: "Native" },
  { name: "Mandarin Chinese", level: "Native" },
  { name: "Spanish", level: "Intermediate" },
  { name: "Japanese", level: "Basic" },
]

const certifications = [
  { name: "TOEIC", score: "990/990", year: "2023" },
  { name: "AWS Cloud Practitioner", score: "Certified", year: "2024" },
  { name: "Google Analytics", score: "Certified", year: "2023" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Languages</h2>
          <p className="text-muted-foreground text-lg">Technical expertise and language proficiencies</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Languages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.score}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
