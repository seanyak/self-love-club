import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Wrapper: ({ children }) => (
      <div className='flex flex-col gap-12'>{children}</div>
    ),
    h1: ({ children }) => (
      <h1 className='blogTitle lg:text-3xl'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-xl font-bold lg:text-2xl'>{children}</h2>
    ),
    h3: ({ children }) => <h3 className='text-lg lg:text-xl font-semibold'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg font-medium'>{children}</h4>,
    p: ({ children }) => <p className='text-base'>{children}</p>,
    ol: ({ children }) => (
      <ol className='list-inside list-decimal'>{children}</ol>
    ),
    ul: ({ children }) => <ul className='ml-10 list-disc'>{children}</ul>,
    code: ({ children }) => (
      <code className='rounded-sm bg-muted p-1 text-[14px] shadow-sm'>
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className='font-semibold'>{children}</strong>
    ),
    ...components,
  };
}
