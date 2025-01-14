import Image from 'next/image'
import React from 'react'
import sponsors from '../data/sponsors.json'

export default function Sponsors() {
  const tiers = [
    {
      tier_name: '$5,000 a month',
      heading: 'Enterprise: $5,000 per month',
      transactions: sponsors.filter((x) => x.tier == '$5,000 a month'),
    },
    {
      tier_name: '$2,500 a month',
      heading: 'Agency: $2,500 per month',
      transactions: sponsors.filter((x) => x.tier == '$2,500 a month'),
    },
    {
      tier_name: '$1,000 a month',
      heading: 'Startup: $1,000 per month',
      transactions: sponsors.filter((x) => x.tier == '$1,000 a month'),
    },
    {
      tier_name: '$49 a month',
      heading: 'Evangelist: $49 per month',
      transactions: sponsors.filter((x) => x.tier == '$49 a month'),
    },
    {
      tier_name: '$19 a month',
      heading: 'Supporter: $19 per month',
      transactions: sponsors.filter((x) => x.tier == '$19 a month'),
    },
    {
      tier_name: '$5 a month',
      heading: 'Contributor: $5 per month',
      transactions: sponsors.filter((x) => x.tier == '$5 a month'),
    },
  ]

  return (
    <div>
      {tiers.map(
        (t, index) =>
          !!t.transactions.length && (
            <div key={index}>
              <h4 className="font-bold">{t.heading}</h4>
              <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6 pl-4">
                {t.transactions.map((x, index) => (
                  <div className="" key={index}>
                    <a
                      className="flex items-center gap-4 shadow-none"
                      href={`https://github.com/${x.sponsor}`}
                    >
                      <Image
                        alt="Sponsor"
                        className="mt-4 mb-4 rounded-full w-12 h-12"
                        width={45}
                        height={45}
                        src={`https://github.com/${x.sponsor}.png`}
                      />
                      <div className="flex items-center flex-col justify-center text-center">
                        <h5 className="avatar__name">{x.sponsor}</h5>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <br />
            </div>
          )
      )}
    </div>
  )
}
