import LegalPageLayout from '@/components/LegalPageLayout';

export default function SLAPage() {
  return (
    <LegalPageLayout label='LEGAL' title='Service Level Agreement'>
      <p className='text-stone-600'>
        Last updated: February 2026. This Service Level Agreement (&quot;SLA&quot;) defines the service levels and support commitments provided by Smart Learning Systems for the Smart Learning platform.
      </p>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          1. Uptime Commitment
        </h2>
        <p className='text-stone-600 mb-4'>
          We target 99.9% monthly uptime for the core platform (excluding planned maintenance). Planned maintenance will be communicated at least 48 hours in advance and scheduled where possible outside peak usage hours. Uptime is measured based on our monitoring systems and excludes issues caused by your environment, third-party services, or force majeure.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          2. Support Tiers
        </h2>
        <p className='text-stone-600 mb-4'>
          <strong>Standard:</strong> Email support with a target response time of 24 business hours for general inquiries. <strong>Priority (where applicable):</strong> Faster response targets (e.g. 8 business hours) and optional phone support. Critical outages are prioritized across all tiers and addressed with best effort to restore service as soon as possible.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          3. Incident Severity & Response
        </h2>
        <p className='text-stone-600 mb-4'>
          <strong>Critical (P1):</strong> Platform down or major feature unavailable — immediate response and continuous effort until resolved. <strong>High (P2):</strong> Significant feature impaired — response within 4 business hours. <strong>Medium/Low (P3/P4):</strong> Minor issues or questions — response within 24 business hours. Actual resolution times depend on the nature of the issue.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          4. Credits (Service Level Credits)
        </h2>
        <p className='text-stone-600 mb-4'>
          If we fail to meet the stated uptime in a given month (and the failure is not due to exclusions above), you may request a service credit as a percentage of that month’s subscription fee. Credit requests must be submitted within 30 days of the end of the affected month. Credits are the sole remedy for uptime shortfalls under this SLA unless otherwise required by law.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          5. Exclusions
        </h2>
        <p className='text-stone-600 mb-4'>
          This SLA does not apply to: (a) issues caused by your equipment, network, or use in breach of our Terms; (b) third-party APIs or integrations; (c) force majeure events; (d) beta or trial-only features unless otherwise stated.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          6. Contact
        </h2>
        <p className='text-stone-600'>
          For SLA-related questions or to report an outage, contact{' '}
          <a href='mailto:sales@smartlearning.pk' className='text-[#cc5500] hover:underline'>
            sales@smartlearning.pk
          </a>
          . For critical issues, use the contact channel provided in your plan (e.g. support email or portal).
        </p>
      </div>
    </LegalPageLayout>
  );
}
