"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Brain, Target, Zap, TrendingUp, Clock, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

function TerminalLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start progress animation after 1 second
    const timer1 = setTimeout(() => {
      setShowProgress(true);
    }, 1000);

    // Animate progress from 0 to 100
    const timer2 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoadingComplete(true);
            // Wait 1 second after 100%, then trigger page reveal
            setTimeout(() => {
              onLoadingComplete();
            }, 1000);
            return 100;
          }
          // Simulate realistic loading with different speeds
          if (prev < 20) return prev + 2;
          if (prev < 60) return prev + 5;
          if (prev < 90) return prev + 3;
          return prev + 1;
        });
      }, 60);

      return () => clearInterval(interval);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoadingComplete]);

  return (
    <div className="terminal-border p-4 mb-8 text-left min-h-[120px] flex flex-col justify-center">
      <div className="terminal-text text-sm mb-2 terminal-loading-line1">$ initializing_lebo_system...</div>
      <div className="terminal-text text-sm mb-4 terminal-loading-line2 flex items-center">
        <span>$ loading_ki_tutor_protocol...</span>
        {showProgress && (
          <>
            <div className="terminal-progress-container ml-2">
              <div 
                className="terminal-progress-bar transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="terminal-progress-text ml-2 min-w-[3rem]">{progress}%</span>
          </>
        )}
      </div>
      {loadingComplete && (
        <div className="terminal-text text-sm text-green-400 animate-pulse">
          $ system_ready - starting_lebo_interface...
        </div>
      )}
    </div>
  );
}

function HeroContent() {
  return (
    <div className="animate-fade-in-up">
      {/* <Badge variant="secondary" className="mb-6 text-sm font-mono terminal-border px-4 py-2 bg-black border-green-500">
        <Zap className="mr-2 h-4 w-4" />
        REVOLUTIONÄRE_KI_TECHNOLOGIE.exe
      </Badge> */}
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 gradient-text terminal-typing font-mono leading-tight break-words">
        <div>LEBO: Der revolutionäre KI-Tutor</div>
        <div>für Bestnoten in Mathe</div>
      </h1>
      
      <div className="terminal-border p-6 mb-8 bg-black/50 text-left">
        <p className="text-xl md:text-2xl terminal-text mb-2 font-mono terminal-typing-fast-line1">
          {`> Die weltweit erste intelligente Lernplattform,`}
        </p>
        <p className="text-xl md:text-2xl terminal-text mb-2 font-mono terminal-typing-fast-line2">
          {`> die mit dir wächst und dich zum`}
        </p>
        <p className="text-xl md:text-2xl terminal-text font-mono terminal-typing-fast-line3">
          {`> Abitur-Erfolg führt.`}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-lg px-8 terminal-button font-mono">
          $ START_LEARNING_PROTOCOL
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 terminal-button font-mono">
          $ EXECUTE_DEMO.sh
        </Button>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowMainContent(true);
  };

  if (!showMainContent) {
    return (
      <div className="min-h-screen bg-background text-foreground relative flex items-center justify-center">
        {/* Terminal Header */}
        <div className="absolute top-4 left-4 right-4">
          <div className="terminal-border p-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm terminal-text font-mono">LEBO_TERMINAL v2.0.1 - KI_TUTOR_SYSTEM</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>
        </div>

        {/* Loading Screen */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* LEBO Sign */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text font-mono mb-4 terminal-flicker">
                LEBO
              </h1>
              <div className="terminal-text-secondary font-mono text-lg md:text-xl">
                KI-TUTOR_SYSTEM v2.0.1
              </div>
            </div>
            
            <TerminalLoader onLoadingComplete={handleLoadingComplete} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative animate-fade-in-up">
      {/* Terminal Header */}
      <div className="terminal-border mx-4 mt-4 p-2 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm terminal-text font-mono">LEBO_TERMINAL v2.0.1 - KI_TUTOR_SYSTEM</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      </div>

      <main className="relative z-2">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">
              <HeroContent />
            </div>
          </div>
        </section>

        <Separator />

        {/* Problem Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="terminal-border p-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 terminal-text font-mono">
                  $ ERROR_ANALYSIS: Das Mathe-Abitur Protokoll
                </h2>
                <div className="text-center terminal-text-secondary font-mono">
                  [WARNING] Massive Lernherausforderung erkannt...
                </div>
              </div>
              
              <div className="terminal-card p-8 mb-6">
                <div className="terminal-text font-mono text-lg leading-relaxed mb-6">
                  <span className="text-red-400">[ERROR_001]:</span> Jedes Jahr stehen Tausende von Schülerinnen und Schülern in Deutschland vor derselben gewaltigen Herausforderung: dem Mathematik-Abitur. Die Vorbereitung ist oft ein chaotischer Prozess, geprägt von stapelweise Büchern, endlosen Übungsaufgaben und dem nagenden Gefühl, nicht zu wissen, wo man überhaupt anfangen soll.
                </div>
                
                <div className="terminal-text font-mono text-lg leading-relaxed mb-6">
                  <span className="text-yellow-400">[WARNING_002]:</span> Man verbringt Stunden damit, Themen zu wiederholen, die man bereits beherrscht, während die wirklichen Wissenslücken unentdeckt bleiben und am Prüfungstag zur bösen Überraschung werden.
                </div>
                
                <div className="terminal-text font-mono text-lg leading-relaxed">
                  <span className="text-red-400">[CRITICAL_003]:</span> Das traditionelle Lernen mit der Gießkanne – alles für alle – ist ineffizient, demotivierend und respektiert nicht die individuelle Lerngeschwindigkeit und den Kenntnisstand jedes Einzelnen.
                </div>
              </div>
            </div>
          </div>
        </section>      <Separator />

      {/* Solution Section */}
        <Separator />

        {/* Solution Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="terminal-border p-6 mb-8">
                <div className="terminal-text font-mono text-sm mb-2">$ searching_for_solution.exe...</div>
                <div className="terminal-text font-mono text-sm mb-4">$ found: BETTER_LEARNING_PROTOCOL.ai</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 terminal-text">
                  Was wäre, wenn es einen besseren Weg gäbe?
                </h2>
                <p className="text-lg terminal-text-secondary font-mono">
                  IF (technologie.verstehen(wissensstand) AND technologie.vorhersagen(next_learning_step)) 
                  THEN note.verbessern(maximal, minimal_time);
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-lg px-6 py-2 terminal-border bg-black border-green-500">
                <Brain className="mr-2 h-5 w-5 terminal-text" />
                <span className="terminal-text font-mono">SOLUTION_FOUND: LEBO.exe</span>
              </Badge>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="terminal-card p-8">
                <div className="terminal-text font-mono text-lg leading-relaxed mb-4">
                  <span className="text-green-400">[SYSTEM_INIT]:</span> Wir stellen LEBO vor, eine revolutionäre, KI-gestützte Lernplattform, die die Abiturvorbereitung in Mathematik von Grund auf neu denkt.
                </div>
                <div className="terminal-text font-mono text-lg leading-relaxed">
                  <span className="text-blue-400">[MISSION]:</span> Weg vom frustrierenden Rätselraten, hin zur maßgeschneiderten Präzisionsförderung für jeden einzelnen Schüler.
                </div>
              </div>
            </div>
          </div>
        </section>      <Separator />

      {/* Core Principle Section */}
        <Separator />

        {/* Core Principle Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="terminal-border p-4 mb-6">
                  <div className="terminal-text font-mono text-sm">$ loading_core_principle.dll...</div>
                  <div className="terminal-text font-mono text-sm">$ STATUS: READY</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 terminal-text font-mono">
                  Das Kernprinzip: Lernen, was wirklich zählt
                </h2>
                <p className="text-lg terminal-text-secondary font-mono">
                  PHILOSOPHIE.init() = "Zeit ist zu wertvoll für irrelevante Inhalte"
                </p>
              </div>

              <div className="terminal-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="terminal-text font-mono text-lg leading-relaxed">
                  <span className="text-cyan-400">[CORE_FUNCTION]:</span> Anstatt Ihnen einen riesigen Berg an Lernmaterial vorzusetzen, fungiert LEBO als Ihr persönlicher, digitaler Mathe-Tutor, der Sie intelligent und effizient durch die gesamte Abiturvorbereitung begleitet.
                </div>
              </div>
            </div>
          </div>
        </section>      <Separator />

      {/* Three Steps Section */}
        <Separator />

        {/* Three Steps Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="terminal-border p-4 mb-6 text-left">
                <div className="terminal-text font-mono text-sm">$ executing_three_step_protocol.sh</div>
                <div className="terminal-text font-mono text-sm">$ STATUS: [████████████████████] 100% LOADED</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 terminal-text font-mono">
                Der Prozess in drei Schritten
              </h2>
              <p className="text-lg terminal-text-secondary font-mono">
                // Drei einfache, aber leistungsstarke Funktionen zu Ihrem Erfolg
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="terminal-card relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center font-bold text-lg font-mono">
                    01
                  </div>
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 terminal-text font-mono">
                  STEP_01: Die präzise Wissensanalyse
                </h3>
                <div className="terminal-text font-mono text-sm leading-relaxed mb-4">
                  <span className="text-blue-400">[INIT_TEST]:</span> Alles beginnt mit einem intelligenten Onboarding-Test. Dieser Test ist mehr als nur eine einfache Abfrage. Er wurde entwickelt, um ein detailliertes, mehrdimensionales Bild Ihrer mathematischen Fähigkeiten zu zeichnen.
                </div>
                <div className="terminal-text font-mono text-sm leading-relaxed">
                  <span className="text-cyan-400">[ANALYSIS]:</span> In kürzester Zeit identifiziert das System nicht nur die Themenbereiche (wie Analysis, Stochastik oder Geometrie), sondern auch die spezifischen Konzepte innerhalb dieser Themen.
                </div>
              </div>

              {/* Step 2 */}
              <div className="terminal-card relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center font-bold text-lg font-mono">
                    02
                  </div>
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 terminal-text font-mono">
                  STEP_02: Der dynamische Lernplan
                </h3>
                <div className="terminal-text font-mono text-sm leading-relaxed mb-4">
                  <span className="text-purple-400">[PLAN_GEN]:</span> Basierend auf den Ergebnissen der Analyse erstellt die KI von LEBO Ihren ganz persönlichen Lernplan. Dieser Plan ist keine starre Liste von Aufgaben. Er ist eine dynamische Roadmap.
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm terminal-text font-mono">weakness.strengthen()</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm terminal-text font-mono">strength.solidify()</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="terminal-card relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center font-bold text-lg font-mono">
                    03
                  </div>
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 terminal-text font-mono">
                  STEP_03: Intelligente Anpassung in Echtzeit
                </h3>
                <div className="terminal-text font-mono text-sm leading-relaxed mb-4">
                  <span className="text-orange-400">[REAL_TIME]:</span> Das ist die wahre Magie von LEBO. Während Sie lernen, beobachtet und analysiert die KI permanent Ihren Fortschritt.
                </div>
                <div className="terminal-text font-mono text-sm leading-relaxed">
                  <span className="text-pink-400">[AI_TUTOR]:</span> Stellen Sie sich einen persönlichen Tutor vor, der Ihnen 24/7 über die Schulter schaut, Ihre Denkmuster versteht und den Unterricht sofort anpasst.
                </div>
              </div>
            </div>
          </div>
        </section>      <Separator />

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

      </main>

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
