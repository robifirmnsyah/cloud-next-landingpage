"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    "question": "Who can participate in this hackathon?",
    "answer": "Anyone! The hackathon is open to both individuals and teams. Whether you're a beginner or an experienced developer, you're welcome to join."
  },
  {
    "question": "Can I join the hackathon alone?",
    "answer": "Yes, you can join as a solo participant or as part of a team. Either is fine."
  },
  {
    "question": "Is there a limit to team size?",
    "answer": "Teams can consist of 1 to 4 people. We recommend working in small teams to balance collaboration and efficiency."
  },
  {
    "question": "Do I need to pay extra to join the hackathon?",
    "answer": "No additional cost! As long as you've purchased a ticket (Hackathon Pass), you're automatically eligible to join the hackathon. In fact, you can even earn a 50% cashback if you actively participate during the hackathon day!"
  },
  {
    "question": "Is there a specific theme or product we must build?",
    "answer": "No specific theme is enforced. You are free to build anything useful or meaningful. Your solution doesn't have to be perfect — it just needs to show effort and purpose."
  },
  {
    "question": "What tools or programming languages can I use?",
    "answer": "You can use any language or framework you're comfortable with — as long as your project integrates the provided ADK (App Development Kit)."
  },
  {
    "question": "Do I need to be an expert to participate?",
    "answer": "Not at all. The hackathon is open to all skill levels. This is a great opportunity to learn, collaborate, and experiment with new ideas."
  },
  {
    "question": "Will there be mentorship or technical support during the hackathon?",
    "answer": "Yes, we'll have mentors available during key hours to help with technical questions or project feedback."
  },
  {
    "question": "What should I prepare before the hackathon?",
    "answer": "Bring your own laptop and charger, make sure you have access to the ADK and documentation, install your preferred development tools, and bring your ideas and a positive mindset!"
  },
  {
    "question": "What are the judging criteria?",
    "answer": "Projects will generally be judged based on: Functionality, Usefulness/Problem Solving, Integration with ADK, and Presentation/Demo Quality. You don't need a perfect UI — focus on value and execution."
  },
  {
    "question": "How can I get the 50% cashback?",
    "answer": "To be eligible for the 50% cashback, you must actively participate in the hackathon session and demonstrate your project during the event. Our team will verify your attendance and participation on the spot."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Everything you need to know about the hackathon
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions? Reach out to us at{' '}
            <a 
              href="https://www.instagram.com/gdgcloudbandung/" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              @gdgcloudbandung
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}