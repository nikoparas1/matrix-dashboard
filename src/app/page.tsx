import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Trophy, Brain, FilePen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col min-h-0 items-center text-center p-4 justify-evenly gap-4">
      <div className="matrix-rain" />
      <section id="intro" className="container">
        <Badge
          className="mb-6 bg-primary/10 text-primary border-primary/20"
          variant={undefined}
        >
          The Future of Coding Practice
        </Badge>
        <div className="container">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 glow-text text-balance">
            Welcome to the <span className="text-primary">MATRIX</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-pretty text-primary">
            Enter a new dimension of coding practice. Matrix is an all-in-one
            interview prep tool with an immersive, AI-powered platform that
            adapts to your learning style.
          </p>
        </div>
      </section>

      <section id="" className="container">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScrkVf_x_YMy7qsmH59NTESpmmgYr5v7yQ_mHfSGSjecrl_JA/viewform?usp=sharing&ouid=102078347171548237339"
          target="blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Button
            style={{ cursor: "pointer" }}
            size="lg"
            className="text-lg px-8 py-6 bg-background/80 hover:bg-background/100 text-white matrix-border glow-text"
            variant={undefined}
          >
            Interested? Fill out our survey to learn more!
            <FilePen className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <section id="" className="container">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold glow-text">
            Why Choose Matrix?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-pretty text-primary">
            Experience coding practice like never before with our revolutionary
            platform features.
          </p>
        </div>
      </section>

      <section id="features" className="container">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm matrix-border hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary mt-3 mb-2">
                AI-Powered Learning
              </CardTitle>
              <CardDescription className={undefined}>
                Advanced AI analyzes your coding patterns and creates
                personalized learning paths.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm matrix-border hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary mt-3 mb-2">
                Real-time Feedback
              </CardTitle>
              <CardDescription className={undefined}>
                Get instant feedback on your code quality, performance, and best
                practices as you type.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm matrix-border hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary mt-3 mb-2">
                Lesson Plan
              </CardTitle>
              <CardDescription className={undefined}>
                Follow our custom exercises to learn all of the skills you need
                to succeed in coding questions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm matrix-border hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary mt-3 mb-2">
                Interview Prep
              </CardTitle>
              <CardDescription className={undefined}>
                Simulate real technical interviews with AI interviewers and get
                detailed performance analytics.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
