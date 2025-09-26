import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Learn more about my background and interests</p>
        </div>

        <Card className="border-0 bg-card/50">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Science student with a passion for artificial intelligence and software
                development. My journey in technology began during high school when I first discovered programming, and
                since then, I've been fascinated by the potential of AI to solve complex real-world problems.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Currently pursuing my Bachelor's degree in Computer Science, I've maintained a strong academic record
                while actively engaging in research projects and developing practical applications. My interests span
                across machine learning, game development, mobile app development, and data analysis.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding or studying, you can find me exploring the latest developments in AI research,
                contributing to open-source projects, or working on personal projects that challenge me to learn new
                technologies and methodologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
