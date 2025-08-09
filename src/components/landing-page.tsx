"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Brain, Target, Zap, TrendingUp, Clock, Award, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              🚀 Revolutionäre KI-Technologie
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 gradient-text animate-fade-in-up">
              LEBO: Der revolutionäre KI-Tutor für Bestnoten in Mathe
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Die weltweit erste intelligente Lernplattform, die mit dir wächst und dich zum Abitur-Erfolg führt
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Demo ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Problem Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Das Mathe-Abitur: Eine riesige Herausforderung
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jedes Jahr stehen Tausende von Schülerinnen und Schülern in Deutschland vor derselben gewaltigen Herausforderung: dem Mathematik-Abitur. Die Vorbereitung ist oft ein chaotischer Prozess, geprägt von stapelweise Büchern, endlosen Übungsaufgaben und dem nagenden Gefühl, nicht zu wissen, wo man überhaupt anfangen soll.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Man verbringt Stunden damit, Themen zu wiederholen, die man bereits beherrscht, während die wirklichen Wissenslücken unentdeckt bleiben und am Prüfungstag zur bösen Überraschung werden.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Das traditionelle Lernen mit der Gießkanne – alles für alle – ist ineffizient, demotivierend und respektiert nicht die individuelle Lerngeschwindigkeit und den Kenntnisstand jedes Einzelnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Solution Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Was wäre, wenn es einen besseren Weg gäbe?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wenn eine Technologie nicht nur Ihren aktuellen Wissensstand versteht, sondern auch vorhersagen kann, was Sie als Nächstes lernen müssen, um Ihre Note in minimaler Zeit maximal zu verbessern?
            </p>
          </div>

          <div className="text-center mb-12">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Brain className="mr-2 h-5 w-5" />
              Genau hier setzen wir an
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wir stellen LEBO vor, eine revolutionäre, KI-gestützte Lernplattform, die die Abiturvorbereitung in Mathematik von Grund auf neu denkt. Unser Ziel: Weg vom frustrierenden Rätselraten, hin zur maßgeschneiderten Präzisionsförderung für jeden einzelnen Schüler.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Core Principle Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Das Kernprinzip: Lernen, was wirklich zählt
              </h2>
              <p className="text-lg text-muted-foreground">
                LEBO basiert auf einer einfachen, aber wirkungsvollen Philosophie: Ihre Zeit ist zu wertvoll, um sie mit irrelevanten Inhalten zu verschwenden.
              </p>
            </div>

            <Card className="mb-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  Anstatt Ihnen einen riesigen Berg an Lernmaterial vorzusetzen, fungiert LEBO als Ihr persönlicher, digitaler Mathe-Tutor, der Sie intelligent und effizient durch die gesamte Abiturvorbereitung begleitet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Three Steps Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Der Prozess in drei Schritten
            </h2>
            <p className="text-lg text-muted-foreground">
              Drei einfache, aber leistungsstarke Schritte zu Ihrem Erfolg
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Der smarte Start: Die präzise Wissensanalyse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Alles beginnt mit einem intelligenten Onboarding-Test. Dieser Test ist mehr als nur eine einfache Abfrage. Er wurde entwickelt, um ein detailliertes, mehrdimensionales Bild Ihrer mathematischen Fähigkeiten zu zeichnen.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  In kürzester Zeit identifiziert das System nicht nur die Themenbereiche (wie Analysis, Stochastik oder Geometrie), in denen Sie Schwierigkeiten haben, sondern auch die spezifischen Konzepte innerhalb dieser Themen.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Ihr persönlicher Weg zum Erfolg: Der dynamische Lernplan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Basierend auf den Ergebnissen der Analyse erstellt die KI von LEBO Ihren ganz persönlichen Lernplan. Dieser Plan ist keine starre Liste von Aufgaben. Er ist eine dynamische Roadmap, die sich auf die Bereiche konzentriert, die den größten Einfluss auf Ihre Note haben werden.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Schwächen gezielt stärken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Stärken intelligent festigen</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Lernen, das mitdenkt: Intelligente Anpassung in Echtzeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Das ist die wahre Magie von LEBO. Während Sie lernen, Aufgaben lösen und mit den Inhalten interagieren, beobachtet und analysiert die KI von LEBO permanent Ihren Fortschritt.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Stellen Sie sich einen persönlichen Tutor vor, der Ihnen 24/7 über die Schulter schaut, Ihre Denkmuster versteht und den Unterricht sofort anpasst.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technology Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Die Technologie dahinter: Mehr als nur richtig oder falsch
            </h2>
            
            <Card className="mb-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Um diese hohe Personalisierungsstufe zu erreichen, nutzen wir bewährte Methoden aus dem maschinellen Lernen und der kognitiven Wissenschaft. Im Herzen von LEBO arbeiten fortschrittliche Algorithmen wie Bayesian Knowledge Tracing (BKT) und Deep Knowledge Tracing (DKT), die auf neuronalen Netzen (RNN, LSTM) basieren.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Brain className="mr-2 h-5 w-5" />
                    Was bedeutet das für Sie?
                  </h4>
                  <p className="text-muted-foreground">
                    Ganz einfach: LEBO bewertet nicht nur, ob Ihre Antwort richtig oder falsch war. Es berechnet die Wahrscheinlichkeit, dass Sie ein Konzept wirklich und nachhaltig verstanden haben. Es blickt hinter die Kulissen Ihres Wissens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihr Nutzen auf einen Blick
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Maximale Effizienz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sie lernen nur das, was Sie für Ihre Prüfung wirklich brauchen und was Ihnen die meisten Punkte bringt.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Gezielte Förderung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schluss mit der Suche nach den eigenen Schwächen – das System findet und schließt sie für Sie.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Motivation durch Meisterschaft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Statt Frustration erleben Sie kontinuierliche, sichtbare Fortschritte, was die Lernmotivation entscheidend steigert.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexibilität und Kontrolle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lernen Sie wann und wo Sie wollen, in Ihrem eigenen Tempo, aber immer auf dem optimalen Weg.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Sicherheit für den Prüfungstag</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sie gehen mit dem Vertrauen ins Abitur, bestens auf alle relevanten Themen vorbereitet zu sein.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Persönlicher Tutor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 verfügbarer, intelligenter Tutor, der sich perfekt an Ihren Lernstil anpasst.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Future Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Die Zukunft der Prüfungsvorbereitung
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Das Mathe-Abitur muss keine Zeit der Angst und des Stresses sein. Es kann eine Zeit des fokussierten Wachstums und der Selbstbestätigung werden. Mit LEBO geben wir Schülern ein Werkzeug an die Hand, das sie befähigt, ihr volles Potenzial zu entfalten.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir glauben, dass die Zukunft des Lernens persönlich, datengestützt und motivierend ist. Treten Sie ein in eine neue Ära der Abiturvorbereitung.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für Ihren persönlichen Weg zur Bestnote mit LEBO?
              </h3>
              <Button size="lg" className="text-lg px-8">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">LEBO</h3>
            <p className="text-muted-foreground">
              Der revolutionäre KI-Tutor für Bestnoten in Mathe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
