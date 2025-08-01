import { ChevronRight } from 'lucide-react'
import React from 'react'

function Breadcrumb({breadcrumbs}: {breadcrumbs: string[]}) {
  return (
    <div className='flex items-center space-x-1 text-sm text-muted-foreground mb-6'>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <span>{crumb}</span>
          {index < breadcrumbs.length - 1 && (
            <ChevronRight className='w-4 h-4' />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
export default Breadcrumb