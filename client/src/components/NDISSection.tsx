export default function NDISSection() {
  return (
    <section id="ndis" className="relative py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            NDIS & Community Access
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            Creative support through art — inclusive workshops that build skills, confidence, and connection.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-2xl border border-gray-200 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">Creative Support Through Art</h3>
          <p className="mt-3 text-gray-700">
            At <span className="font-semibold">Scale Breakers</span>, we blend graffiti culture, design, and hands-on making into
            structured, sensory-aware sessions for people of all abilities. Every workshop is adapted for pace, clarity, and comfort
            using visual prompts, step-by-step demos, and positive feedback.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* NDIS Participants */}
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h4 className="text-lg md:text-xl font-semibold">For NDIS Participants</h4>
            <p className="mt-3 text-gray-700">
              We support <span className="font-medium">self-managed</span> and <span className="font-medium">plan-managed</span> participants, and
              collaborate with coordinators and carers to align with goals.
            </p>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Workshops can support goals in:</p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                <li><span className="font-medium">Capacity Building:</span> creativity, focus, fine-motor skills, problem-solving</li>
                <li><span className="font-medium">Social & Community Participation:</span> confidence, communication, teamwork</li>
                <li><span className="font-medium">Daily Living Skills:</span> planning, routine, self-expression</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Example sessions:</p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                <li>Street-art lettering & design</li>
                <li>Diorama building & 3D model creation</li>
                <li>Upcycling & maker projects</li>
                <li>Custom totes, tumblers, signs</li>
              </ul>
            </div>
            <p className="mt-4 text-gray-700">
              Progress notes and attendance summaries available on request. Invoices include ABN and activity breakdown.
            </p>
          </div>

          {/* Councils & Community */}
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h4 className="text-lg md:text-xl font-semibold">For Councils & Community Programs</h4>
            <p className="mt-3 text-gray-700">
              Procurement-ready delivery for councils, schools, and youth services.
            </p>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Compliance & documentation:</p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                <li>ABN, Public Liability Insurance</li>
                <li>Working With Children Check / Police Check</li>
                <li>Risk assessments & venue compliance</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Program options:</p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                <li>One-off activations & public workshops</li>
                <li>School holiday & term programs</li>
                <li>Community mural & place-making projects</li>
                <li>Multi-session skill-building blocks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-gray-700">
            Ready to plan a session or program tailored to your goals?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="mailto:contact.scalebreakers@gmail.com" 
              className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm md:text-base hover:bg-gray-50 transition"
            >
              📧 contact.scalebreakers@gmail.com
            </a>
            <a 
              href="tel:+61404812284" 
              className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm md:text-base hover:bg-gray-50 transition"
            >
              📞 \+61404812284
            </a>
            <a 
              href="/workshops" 
              className="inline-flex rounded-xl bg-black px-5 py-2 text-sm md:text-base font-medium text-white hover:opacity-90 transition"
            >
              View Workshops
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Note: Scale Breakers operates as an independent creative support provider (not NDIS-registered).
            Services are available to self-managed and plan-managed participants.
          </p>
        </div>
      </div>
    </section>
  );
}



