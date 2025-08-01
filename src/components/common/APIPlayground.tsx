import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

function APIPlayground() {
  return (
    <>
    <h2 className='text-lg font-semibold text-foreground mb-4'>
        API Code Playground
      </h2>
      <Accordion
        type='single'
        collapsible
        className='w-full mb-6'
        defaultValue='customer'
      >
        <AccordionItem value='customer'>
          <Card className='p-4'>
            <AccordionTrigger className='flex items-center justify-between mb-4 p-0 hover:no-underline'>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-medium'>Customer</span>
                <Badge variant='outline' className='text-xs'>
                  REQUIRED
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/* Customer Fields */}
              <div className='space-y-6'>
                {/* Collection Location */}
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-sm font-medium'>
                      CollectionLocation
                    </span>
                  </div>
                  <Badge variant='outline' className='text-xs'>
                    String
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    REQUIRED
                  </Badge>
                  <div className='text-sm text-muted-foreground'>
                    Code of delivery location at PostNL Pakketten
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    Constraints: <span className='italic'>Minimum Length:</span>{' '}
                    6, <span className='italic'>Maximum Length:</span> 6
                  </div>
                  <input
                    type='text'
                    className='w-full bg-secondary border border-border rounded px-3 py-2 text-sm'
                    defaultValue='123456'
                  />
                </div>

                {/* Contact Person */}
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-sm font-medium'>ContactPerson</span>
                  </div>
                  <Badge variant='outline' className='text-xs'>
                    String
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    REQUIRED
                  </Badge>
                  <div className='text-sm text-muted-foreground'>
                    Name of customer contact person
                  </div>
                  <input
                    type='text'
                    className='w-full bg-secondary border border-border rounded px-3 py-2 text-sm'
                    defaultValue='Janssen'
                  />
                </div>

                {/* Customer Code */}
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-sm font-medium'>CustomerCode</span>
                    <Badge variant='outline' className='text-xs'>
                      String
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      REQUIRED
                    </Badge>
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Customer code as known at PostNL Pakketten
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    Constraints: <span className='italic'>Minimum Length:</span>{' '}
                    1, <span className='italic'>Maximum Length:</span> 6
                  </div>
                  <input
                    type='text'
                    className='w-full bg-secondary border border-border rounded px-3 py-2 text-sm'
                    defaultValue='25'
                  />
                </div>
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default APIPlayground