import React from 'react'
import {NextPage} from 'next'
import className from 'classnames'
import drop from 'lodash/drop'
// import Link from 'next/link'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const PHATOGRAPH = 'phatograph'.split('').map((x: string, i: number) => {
  return {
    char: x,
    order: i + 1000,
  }
})

const PHATOGRAPH_EMAIL = [
  ...PHATOGRAPH,
  ...'@gmail.com'.split('').map((x: string, i: number) => {
    return {
      char: x,
      order: i + 1100,
    }
  }),
]

const PHATOGRAPH_GITHUB = [
  ...'github.com/'.split('').map((x: string, i: number) => {
    return {
      char: x,
      order: i + 900,
    }
  }),
  ...PHATOGRAPH,
]

const PHATOGRAPH_LINKEDIN = [
  ...'linkedin.com/in/'.split('').map((x: string, i: number) => {
    return {
      char: x,
      order: i + 800,
    }
  }),
  ...PHATOGRAPH,
]

const LINKS = [
  {
    chars: PHATOGRAPH,
  },
  {
    chars: PHATOGRAPH_EMAIL,
    label: 'Email',
    href: 'mailto:phatograph@gmail.com',
  },
  {
    chars: PHATOGRAPH_GITHUB,
    label: 'GitHub',
    href: 'https://github.com/phatograph',
    external: true,
  },
  {
    chars: PHATOGRAPH_LINKEDIN,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/phatograph',
    external: true,
  },
  {
    label: 'Resume',
    href: '/resume',
    internal: true,
  },
]

const Index: NextPage<{}> = () => {
  const [__h1, __h1Set] = React.useState(0)
  const currentLink = LINKS?.[__h1]

  return (
    <div className='Index'>
      <div className='Index__wrapper'>
        <div className='Index__image'>
          <a
            className='Index__image__a'
            onClick={() => {
              __h1Set(0)
            }}
          >
            <img
              className='Index__img'
              src='/images/_pat_ks_smoke.jpeg'
              alt='Pat Wangrungarun'
            />
          </a>
        </div>

        <a
          className='Index__a'
          href={currentLink?.href}
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <TransitionGroup className='Index__h1' appear>
            {currentLink?.chars?.map((x, i) => {
              const _length = currentLink?.chars?.length

              return (
                <CSSTransition
                  key={x?.order}
                  className='Index__h1__span'
                  timeout={{
                    appear: 100,
                    enter: 400,
                    exit: 1000,
                  }}
                >
                  <span
                    style={
                      {
                        '--Index__h1__span-tlx-enter': `${
                          (i - _length * 0.5) * 0.9
                        }ex`,
                        '--Index__h1__span-tlx': `${
                          (i - _length * 0.5) * 1.1
                        }ex`,
                        '--Index__h1__span-tld': `${i * 10}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {x?.char}
                  </span>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </a>

        <div className='Index__links'>
          {drop(LINKS).map((x, i) => (
            <React.Fragment key={i}>
              {x?.internal ? (
                <a
                  className='Index__links__a'
                  href={x?.href}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  {x?.label}
                </a>
              ) : (
                <a
                  className={className('Index__links__a', {
                    'Index__links__a--active': __h1 == i + 1,
                  })}
                  onClick={() => {
                    __h1Set(i + 1)
                  }}
                >
                  {x?.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className='Index__details'>
          <p className='Index__details__title'>Pat Wangrungarun</p>

          <p className='Index__details__subtitle'>
            A front-end developer who works on <br />
            React, Redux, Rails, Next.js, and Node.js.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
