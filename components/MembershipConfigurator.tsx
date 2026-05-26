"use client";

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, X, CaretDown } from '@phosphor-icons/react'

type MemberType = 'child' | 'adult-young' | 'adult-mid' | 'senior'

interface Member {
  id: string
  type: MemberType
  label: string
  price: number
}

const MEMBER_TYPES = [
  { type: 'child' as MemberType, label: 'Child (0-18)', price: 39 },
  { type: 'adult-young' as MemberType, label: 'Adult (19-44)', price: 69 },
  { type: 'adult-mid' as MemberType, label: 'Adult (45-64)', price: 89 },
  { type: 'senior' as MemberType, label: 'Senior (65+)', price: 109 },
]

const FAMILY_CAP = 250

export function MembershipConfigurator() {
  const [members, setMembers] = useState<Member[]>([])

  const addMember = (type: MemberType) => {
    const memberType = MEMBER_TYPES.find(m => m.type === type)
    if (!memberType) return

    const newMember: Member = {
      id: `${type}-${Date.now()}-${Math.random()}`,
      type: memberType.type,
      label: memberType.label,
      price: memberType.price,
    }

    setMembers(current => [...current, newMember])
  }

  const removeMember = (id: string) => {
    setMembers(current => current.filter(m => m.id !== id))
  }

  const subtotal = members.reduce((sum, member) => sum + member.price, 0)
  const savings = subtotal > FAMILY_CAP ? subtotal - FAMILY_CAP : 0
  const total = Math.min(subtotal, FAMILY_CAP)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Build Your Plan</h2>
        <p className="text-gray-700">Add members to your household and see your exact monthly price.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Add Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {MEMBER_TYPES.map(memberType => (
                <Button
                  key={memberType.type}
                  onClick={() => addMember(memberType.type)}
                  variant="outline"
                  className="w-full justify-between h-auto py-4 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <Plus className="text-gray-700" />
                    <span className="text-gray-900 font-medium">{memberType.label}</span>
                  </div>
                  <span className="text-gray-700 font-semibold">${memberType.price}/mo</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                Current Members ({members.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {members.length === 0 ? (
                <p className="text-gray-700 text-center py-8">No members added yet. Start building your household above.</p>
              ) : (
                <div className="space-y-2">
                  {members.map(member => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div>
                        <span className="text-gray-900 font-medium">{member.label}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-semibold">${member.price}/mo</span>
                        <Button
                          onClick={() => removeMember(member.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                          <X />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-white border-gray-200 shadow-sm sticky top-4">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Monthly Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {members.map(member => (
                  <div key={member.id} className="flex justify-between text-gray-700">
                    <span>{member.label}</span>
                    <span className="font-medium">${member.price}</span>
                  </div>
                ))}

                {members.length > 0 && (
                  <>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between text-gray-900 font-semibold">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                    </div>

                    {savings > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Family Cap Savings</span>
                        <span>-${savings}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-semibold text-lg">Total Monthly Price</span>
                        <span className="text-emerald-600 font-bold text-3xl">${total}</span>
                      </div>
                      {savings > 0 && (
                        <p className="text-sm text-gray-700 mt-2">
                          Family cap applied - maximum ${FAMILY_CAP}/month
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>

              {members.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-gray-700 text-sm">Add members to see your monthly price</p>
                </div>
              ) : (
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg h-12"
                >
                  <a href="https://hint.com/signup/direct-care-indy" target="_blank" rel="noopener noreferrer">
                    Proceed to Enrollment
                  </a>
                </Button>
              )}

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-sm text-gray-900 font-semibold mb-1">Family Cap Guarantee</p>
                <p className="text-sm text-gray-700">
                  No matter how many members you add, your household will never pay more than ${FAMILY_CAP}/month.
                </p>
              </div>

              {/* Pricing Disclaimer */}
              <div className="text-xs text-gray-600 text-center mt-4">
                <p>Pricing subject to change. Contact Direct Care Indy for current rates and enrollment details.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ComparisonTable() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">DPC vs. Traditional Insurance</h2>
        <p className="text-gray-700">See how Direct Primary Care compares to typical insurance plans.</p>
      </div>

      <Card className="bg-white border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-6 text-gray-900 font-semibold">Feature</th>
                <th className="text-left p-6 text-gray-900 font-semibold bg-emerald-50">
                  <div className="flex items-center gap-2">
                    <span>Direct Primary Care</span>
                  </div>
                </th>
                <th className="text-left p-6 text-gray-900 font-semibold">Traditional Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">Monthly Cost (Individual)</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">$69-$109</div>
                  <div className="text-sm text-gray-700">Transparent, flat rate</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">$450-$800</div>
                  <div className="text-sm text-gray-700">Premium + deductible</div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">Office Visit Copay</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">$0</div>
                  <div className="text-sm text-gray-700">Unlimited visits included</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">$25-$75</div>
                  <div className="text-sm text-gray-700">Per visit</div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">Annual Deductible</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">$0</div>
                  <div className="text-sm text-gray-700">No deductible for primary care</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">$1,500-$8,000</div>
                  <div className="text-sm text-gray-700">Before coverage kicks in</div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">Wait Time for Appointment</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">Same Day / Next Day</div>
                  <div className="text-sm text-gray-700">Direct access to your doctor</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">2-4 Weeks</div>
                  <div className="text-sm text-gray-700">Limited availability</div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">Visit Duration</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">30-60 Minutes</div>
                  <div className="text-sm text-gray-700">Unhurried, thorough care</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">7-15 Minutes</div>
                  <div className="text-sm text-gray-700">Rushed appointments</div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 text-gray-900 font-medium">After-Hours Access</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">Text/Call Your Doctor</div>
                  <div className="text-sm text-gray-700">Direct communication 24/7</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">Urgent Care / ER</div>
                  <div className="text-sm text-gray-700">$150-$500+ additional cost</div>
                </td>
              </tr>
              <tr>
                <td className="p-6 text-gray-900 font-medium">Basic Lab Work</td>
                <td className="p-6 bg-emerald-50">
                  <div className="text-emerald-700 font-bold">At Cost (50-90% off)</div>
                  <div className="text-sm text-gray-700">Wholesale pricing</div>
                </td>
                <td className="p-6">
                  <div className="text-gray-900 font-semibold">Full Retail Price</div>
                  <div className="text-sm text-gray-700">Until deductible met</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-gray-900 font-semibold mb-2">The Bottom Line</h3>
        <p className="text-gray-700">
          A typical family of 4 spends <span className="font-semibold text-gray-900">$1,500-$2,000/month</span> on traditional insurance with high deductibles and copays. 
          With DPC, that same family pays just <span className="font-semibold text-emerald-700">$250/month</span> with unlimited primary care access and no hidden fees.
        </p>
      </div>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do I still need insurance?",
      answer: "Yes. We recommend pairing DPC with a high-deductible plan or health share for catastrophic events (hospitalizations, surgery). We handle 90% of your day-to-day care."
    },
    {
      question: "Can I use my HSA/FSA?",
      answer: "In most cases, yes! Check with your administrator, but many members use HSA funds for monthly fees and lab work."
    },
    {
      question: "What if I need a specialist?",
      answer: "We can handle 80-90% of medical issues. If you need a specialist, we coordinate your referral and send your records directly to them."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-700">Common questions about Direct Primary Care membership.</p>
      </div>

      <Card className="bg-white border-gray-200 shadow-sm">
        <CardContent className="p-0">
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-semibold">{faq.question}</span>
                  <CaretDown
                    className={`text-gray-700 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function PricingSection() {
  return (
    <section className="bg-gray-50 py-16">
      <MembershipConfigurator />
      <ComparisonTable />
      <FAQSection />
    </section>
  )
}
