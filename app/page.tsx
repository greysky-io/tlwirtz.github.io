'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Code,
    Rocket,
    Zap,
    CheckCircle,
    X,
    Layers,
    GitBranch,
    Cpu,
    Database,
    Clock,
    Users
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import StructuredData from './components/structured-data';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSubmitted(false);

        try {
            const subject = 'New Greysky.io Email Submission';
            const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const response = await fetch(
                'https://us-central1-greysky-io.cloudfunctions.net/sendMail',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ subject, text })
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong');
            }

            // Handle success
            setSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (err: any) {
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <StructuredData />
            <header className="sticky top-0 z-40 w-full bg-coral text-darkgray">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="inline-block font-bold text-xl">GREYSKY</span>
                        </Link>
                        <nav className="hidden gap-6 md:flex">
                            <Link
                                href="#services"
                                className="flex items-center text-lg font-medium transition-colors hover:text-white text-darkgray"
                            >
                                Services
                            </Link>
                            <Link
                                href="#approach"
                                className="flex items-center text-lg font-medium transition-colors hover:text-white text-darkgray"
                            >
                                Approach
                            </Link>
                            <Link
                                href="#process"
                                className="flex items-center text-lg font-medium transition-colors hover:text-white text-darkgray"
                            >
                                Process
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <Button asChild className="bg-darkgray text-white hover:bg-darkgray/80">
                            <Link href="#contact">Let's Talk</Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-coral text-darkgray">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Ship your MVP while your competition is still{' '}
                                    <span className="text-darkgray font-extrabold">
                                        in meetings
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-darkgray/80 md:text-xl">
                                    We build what you actually need right now – not what bloats your
                                    burn rate. Smart tech that scales when you're ready, not when
                                    consultants tell you to.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-darkgray text-white hover:bg-darkgray/80"
                                >
                                    <Link href="#contact">
                                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-darkgray text-darkgray hover:bg-darkgray/10"
                                >
                                    <Link href="#process">Our Process</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Services That{' '}
                                    <span className="text-coral">Actually Matter</span>
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    No bullshit services that focus on what founders actually need
                                    to succeed.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkgray text-coral">
                                    <Rocket className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">MVP Development</h3>
                                    <p className="text-gray-500">
                                        Ship or die. We build MVPs that actually work, look legit,
                                        and won't fall apart when investors start poking around.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkgray text-coral">
                                    <Code className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Technical Strategy</h3>
                                    <p className="text-gray-500">
                                        We'll tell you what tech you actually need, not what pads
                                        our invoice. Brutal honesty saves you money.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkgray text-coral">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                                    <p className="text-gray-500">
                                        Your competition is still debugging their prototype while
                                        your users are already obsessed with your product.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    The <span className="text-coral">Anti-Agency</span> Approach
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    How we're different from the agencies that waste your time and
                                    money.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-teal flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            We build what you need, not what we want
                                        </h3>
                                        <p className="text-gray-500">
                                            No overengineering. No unnecessary features. Just the
                                            core product that gets you to market and validates your
                                            idea.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-teal flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Transparent timelines that don't lie
                                        </h3>
                                        <p className="text-gray-500">
                                            We won't tell you it takes 6 months when it takes 2. We
                                            also won't tell you it takes 2 when it takes 6.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-teal flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Tech that scales with your business
                                        </h3>
                                        <p className="text-gray-500">
                                            We build foundations that grow with you, not technical
                                            debt that cripples you when you hit product-market fit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <X className="h-6 w-6 text-coral flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">No endless meetings</h3>
                                        <p className="text-gray-500">
                                            We don't bill you to sit in meetings discussing the
                                            perfect shade of blue. We build while others talk.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <X className="h-6 w-6 text-coral flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">No bloated teams</h3>
                                        <p className="text-gray-500">
                                            You don't need 12 people on your project. You need the
                                            right people who know what they're doing.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <X className="h-6 w-6 text-coral flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">No agency bullshit</h3>
                                        <p className="text-gray-500">
                                            We don't do buzzwords, unnecessary complexity, or
                                            inflated invoices. Just honest work that delivers
                                            results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Our <span className="text-coral">No-BS</span> Process
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    How we turn your idea into a working product without the typical
                                    agency runaround.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-5xl py-12">
                            <div className="space-y-12">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-darkgray text-coral">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                    <div className="space-y-2 md:flex-1">
                                        <h3 className="text-2xl font-bold">
                                            Straight Talk Discovery
                                        </h3>
                                        <p className="text-gray-500">
                                            We start with a brutally honest conversation about what
                                            you're trying to build, why it matters, and what's
                                            actually needed to get there. No upselling, no scope
                                            creep—just clarity on what will move the needle.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-darkgray text-coral">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                    <div className="space-y-2 md:flex-1">
                                        <h3 className="text-2xl font-bold">
                                            Rapid Strategy & Planning
                                        </h3>
                                        <p className="text-gray-500">
                                            We map out the minimum viable tech stack and feature set
                                            that will get you to market and prove your concept. We
                                            strip away the nice-to-haves and focus on what's
                                            essential for launch.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-darkgray text-coral">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                    <div className="space-y-2 md:flex-1">
                                        <h3 className="text-2xl font-bold">
                                            Focused Build Sprints
                                        </h3>
                                        <p className="text-gray-500">
                                            We work in tight, focused sprints with clear
                                            deliverables. You'll see progress every week, not just
                                            PowerPoint updates. Our developers build, our designers
                                            design, and you get working software.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-darkgray text-coral">
                                        <span className="text-2xl font-bold">4</span>
                                    </div>
                                    <div className="space-y-2 md:flex-1">
                                        <h3 className="text-2xl font-bold">Launch & Learn</h3>
                                        <p className="text-gray-500">
                                            We don't just build and bail. We help you get your
                                            product in front of users, gather feedback, and iterate
                                            quickly. The goal isn't a perfect product—it's a product
                                            that proves your business can work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section
                    id="tech-stack"
                    className="w-full py-12 md:py-24 lg:py-32 bg-darkgray text-white dark-gradient"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tech We <span className="text-coral">Actually Use</span>
                                </h2>
                                <p className="max-w-[900px] text-lightgray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    No flavor-of-the-month frameworks. Just battle-tested tech that
                                    gets the job done.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <Layers className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">Modern Frontend</h3>
                                </div>
                                <p className="text-lightgray">
                                    React, Next.js, and TypeScript for building UIs that don't fall
                                    apart when your business scales.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <Database className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">Scalable Backend</h3>
                                </div>
                                <p className="text-lightgray">
                                    Node.js, PostgreSQL, and serverless architecture that grows with
                                    your user base without breaking the bank.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <GitBranch className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">DevOps Done Right</h3>
                                </div>
                                <p className="text-lightgray">
                                    CI/CD pipelines, infrastructure as code, and automated testing
                                    to keep your product stable and secure.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <Cpu className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">AI Integration</h3>
                                </div>
                                <p className="text-lightgray">
                                    Practical AI implementation that adds real value, not just
                                    buzzword compliance for your investor deck.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <Users className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">User Authentication</h3>
                                </div>
                                <p className="text-lightgray">
                                    Secure, scalable auth systems with social login, 2FA, and
                                    enterprise SSO when you need it.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-coral p-6">
                                <div className="flex items-center gap-4">
                                    <Clock className="h-8 w-8 text-coral" />
                                    <h3 className="text-xl font-bold">Real-time Features</h3>
                                </div>
                                <p className="text-lightgray">
                                    WebSockets, real-time databases, and event-driven architecture
                                    for collaborative and responsive apps.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Frequently Asked <span className="text-coral">Questions</span>
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Straight answers to the questions founders actually ask.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">
                                    How long does it take to build an MVP?
                                </h3>
                                <p className="text-gray-500">
                                    Typically 6-12 weeks, depending on complexity. Anyone who
                                    promises faster is cutting corners that will cost you later.
                                    Anyone who says longer is overengineering.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">How much does an MVP cost?</h3>
                                <p className="text-gray-500">
                                    Most of our MVPs range from $30K-$100K. If you need something
                                    for less, we'll tell you honestly what corners to cut. If you
                                    need something more complex, we'll break it into phases.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">
                                    Do you work with non-technical founders?
                                </h3>
                                <p className="text-gray-500">
                                    Absolutely. Most of our clients are domain experts, not tech
                                    experts. We translate your business needs into technical
                                    solutions without the jargon.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">
                                    What happens after the MVP is built?
                                </h3>
                                <p className="text-gray-500">
                                    We can either hand it off to your team with proper
                                    documentation, help you hire the right people to maintain it, or
                                    continue working with you on an ongoing basis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">
                                    Do you take equity instead of cash?
                                </h3>
                                <p className="text-gray-500">
                                    Rarely, but we're open to hybrid models for the right projects.
                                    We prefer to be paid for our work and let you keep your equity
                                    for investors who bring more than just services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">
                                    How do you handle changes during development?
                                </h3>
                                <p className="text-gray-500">
                                    We build in sprints with regular demos and feedback cycles.
                                    Changes are expected and welcomed, but we'll be honest about the
                                    impact on timeline and budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2 flex flex-col">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Ready to Build{' '}
                                    <span className="text-coral">Something That Works?</span>
                                </h2>
                                <p className="max-w-[600px] self-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Let's cut through the BS and get your product to market. No
                                    endless meetings, no bloated teams, no agency bullshit.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form onSubmit={handleSubmit} className="grid gap-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="name" className="sr-only">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            placeholder="Name"
                                            className="w-full rounded-md border border-gray-300 p-3 text-sm"
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="email" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            placeholder="Email"
                                            className="w-full rounded-md border border-gray-300 p-3 text-sm"
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="message" className="sr-only">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us about your project"
                                            className="w-full rounded-md border border-gray-300 p-3 text-sm"
                                            rows={4}
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-coral text-white hover:bg-coral/80 disabled:opacity-50"
                                        disabled={submitting}
                                    >
                                        {submitting ? 'Sending...' : "Let's Talk"}
                                    </Button>
                                    {submitted && (
                                        <p className="text-sm text-teal">
                                            Message sent successfully!
                                        </p>
                                    )}
                                    {error && <p className="text-sm text-coral">{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-coral text-darkgray">
                <p className="text-xs text-darkgray/80">
                    © 2024 Greysky Digital. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-darkgray hover:text-white"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-darkgray hover:text-white"
                        href="#"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
