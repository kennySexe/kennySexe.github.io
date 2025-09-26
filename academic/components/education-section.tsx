import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">My academic journey and achievements</p>
        </div>

        <Card className="border-0 bg-card">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">Bachelor of Science in Computer Science</CardTitle>
                <p className="text-lg font-semibold text-primary mb-2">Stanford University</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Expected Graduation: May 2025</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">GPA: 3.8/4.0</Badge>
                  <Badge variant="outline">Dean's List</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Data Structures & Algorithms",
                    "Artificial Intelligence",
                    "Database Systems",
                    "Software Engineering",
                    "Computer Vision",
                    "Natural Language Processing",
                    "Statistics & Probability",
                    "Linear Algebra",
                    "Discrete Mathematics",
                  ].map((course) => (
                    <Badge key={course} variant="outline" className="text-sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Academic Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Dean's List for 4 consecutive semesters</li>
                  <li>Computer Science Department Scholarship recipient</li>
                  <li>Outstanding Student in AI/ML coursework</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
