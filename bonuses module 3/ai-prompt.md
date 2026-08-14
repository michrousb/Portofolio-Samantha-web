## Prompt 1:
You are a senior React and TypeScript frontend developer. I have an existing personal portfolio application built with React, TypeScript, Vite, and React Router.
Create a responsive ProjectsPage component that displays portfolio projects in a grid layout. Each project card must show a title, description, technology stack, and an optional live-demo link.
Add filters for All Projects, Projects with Live Demo, and Projects without Live Demo. The active filter must be visually clear and accessible. Include a loading skeleton and an empty state with a reset-filter button.
Use strict TypeScript without any. Use semantic HTML, accessible buttons, visible keyboard focus states, proper heading hierarchy, and aria-pressed for filter buttons.
Do not include navigation, footer, routing configuration, hard-coded API keys, or backend code. Generate only the ProjectsPage and supporting presentational components. Use sample data only as placeholders because I will connect it to my existing project data array.

### Result: ![alt text](prompt%20images/image.png)

### Evaluation

The first result successfully included a project grid, filters, a loading
state, and an empty state. However:

1. The visual design did not match the existing portfolio interface.
2. The generated color palette, card style, spacing, and overall theme
   were significantly different from the portfolio created in Module 2.
3. The output looked like a separate template instead of an improvement
   to the existing Projects page.

## Prompt 2
Context and Role:
You are a senior React and TypeScript frontend developer and the client already have an existing personal portfolio application from a previous
module. It is built using React, TypeScript, Vite, React Router, Zustand,
and regular CSS files.

The portfolio already has:
- a Home page
- an About page
- a basic Projects page
- a reusable typed ProjectCard component
- an existing project data array stored in Zustand
- light and dark mode
- responsive navigation and page layout

The client have attached a screenshot of the current Projects page. The current page
already has project cards, a responsive grid, and a simple checkbox filter
for projects with live demos.

Instruction:
Redesign only the Projects page so it looks more complete and polished,
without changing the overall visual identity of my portfolio. You may add other feature such as sorting or others. 

Create a ProjectsPage UI containing:
- the existing page title style
- a short introduction below the title
- filter buttons for All Projects, Live Demo, and Without Demo
- a clear active-filter state
- a visible number of matching projects
- a responsive project-card grid
- a visual design for a loading skeleton state
- a visual design for an empty state with a Reset Filters button

The existing project data structure is approximately:

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
}

Mind you, this is the color I used for the project. 

body.dark-mode {
  --color-bg: #19532b; 
  --color-text: #f3e8cc;           
  --color-muted: rgba(243, 232, 204, 0.7);

  --color-primary: #ffca26;      
  --color-secondary: #9abc04;    
  --color-accent: #f86015;    

  --color-surface: rgba(243, 232, 204, 0.1);
  --color-border: rgba(243, 232, 204, 0.35);
}

body.light-mode {
--color-bg: #f3e8cc;          
  --color-text: #19532b;         
  --color-muted: rgba(25, 83, 43, 0.65);

  --color-primary: #f86015;    
  --color-secondary: #ffca26;    
  --color-accent: #d42518;       

  --color-surface: rgba(255, 202, 38, 0.18);
  --color-border: rgba(25, 83, 43, 0.3);
}
Design direction:
- preserve the playful and clean personal portfolio appearance
- preserve rounded project cards
- preserve bold borders and offset shadows
- preserve pill-shaped technology badges
- preserve the highlighted page-heading style
- support existing light and dark themes using CSS variables
- make the result feel like an improved version of the attached page,
  not a completely different website

Constraints:
- do not create a new application
- do not create a navbar, footer, or router
- do not redesign the Home or About pages
- do not use Next.js
- do not use Tailwind CSS
- do not use the TypeScript 'any' type
- do not create a permanent duplicate project data array
- use React, strict TypeScript, semantic HTML, and regular CSS
- sample data may only be used inside the preview

The example is shown as the picture given. 
![alt text](prompt%20images/image-1.png)

### Result : ![alt text](prompt%20images/image-2.png)

### Evaluation 
1. The implementation still depended on Tailwind CSS and shadcn even
   though the existing portfolio uses regular CSS.
2. The mobile preview displayed two narrow columns.
3. It introduced a duplicate theme control.

## Prompt 3 (New Chat)
Context:

I have an existing personal portfolio built with React, TypeScript, Vite,
React Router, Zustand, and regular CSS files.

The portfolio already has a reusable typed ProjectCard component, an
existing project data array in Zustand, light and dark mode, and its own
navbar, footer, routing, and theme toggle.

I attached screenshots of:
1. My original Projects page.
2. The latest AI-generated Projects page design.

The latest design direction is already good and visually matches my
portfolio. However, its mobile layout is too narrow because it still uses
two columns, and the generated implementation uses Tailwind CSS and
shadcn even though my existing project uses regular CSS.

Role:

You are a senior React and TypeScript frontend developer experienced in
responsive design and integrating UI into existing codebases.

Instruction:

Remake and refine the attached ProjectsPage without redesigning its current visual
direction.

Make these changes:
- use three columns on wide desktop screens
- use two columns on tablet screens
- use one full-width column on mobile screens
- make filters and sorting controls wrap neatly on small screens
- keep technology badges wrapping naturally
- keep project cards visually balanced
- remove the duplicate theme-switch button because my navbar already has one
- convert the entire implementation from Tailwind and shadcn into regular CSS

Scope:

Modify only the ProjectsPage content and its styling.

Preserve:
- the current green, cream, lime, yellow, and orange visual direction
- rounded project cards
- visible borders and offset shadows
- pill-shaped technology badges
- highlighted heading text
- filters, project count, sorting, loading state, and empty state

Do not create or modify the navbar, footer, router, theme system, Home page,
or About page.

Precision:

Use React and strict TypeScript with:
- no Tailwind CSS
- no shadcn/ui
- no tw-animate-css
- no Tailwind utility classes or directives
- no imports from components/ui
- no inline styles
- no TypeScript any
- no permanent duplicate project data
- no replacement for my existing ProjectCard component

Use semantic class names and a separate regular CSS file. Use existing CSS
variables such as var(--color-bg), var(--color-text), var(--color-primary),
var(--color-secondary), var(--color-accent), var(--color-surface), and
var(--color-border).

Example:

Use semantic class names such as:

projects-page
projects-toolbar
projects-filter-group
projects-sort
projects-grid
projects-empty-state
project-skeleton

Do not use utility class names such as:

grid-cols-3
px-4
rounded-xl
bg-primary

Output:

Show updated desktop and mobile previews.

Return only:
1. ProjectsPage.tsx
2. ProjectsPage.css
3. Any ProjectsPage-specific loading or empty-state component that is
   necessary

Keep the code ready to connect to my existing Zustand data and ProjectCard. 
![alt text](prompt%20images/image-3.png)
![alt text](prompt%20images/image-4.png)

### Result:
![alt text](prompt%20images/image-5.png)
### Evaluation


## Prompt 4
Context:

Continue refining the same ProjectsPage from the previous response.
The current layout, visual identity, responsive behavior, filters, sorting,
loading state, empty state, and accessibility are already approved.

Role:

You are a senior frontend developer specializing in subtle UI
micro-interactions and polished portfolio experiences.

Instruction:

Add subtle and consistent interaction feedback without redesigning the page
or adding new features.

Improve these interactions:

- project cards should lift slightly on hover and keyboard focus
- card shadows may deepen subtly during interaction
- filter buttons should have clear hover, active, and pressed feedback
- the selected filter should transition smoothly without causing layout shift
- Live Demo buttons should have a small arrow movement on hover
- the sorting select should have consistent hover and focus feedback
- technology badges may have a very subtle hover response
- project-grid changes after filtering or sorting should feel smooth
- the Reset Filters button should provide clear interaction feedback

Scope:

Modify only ProjectsPage-related CSS and, only when necessary, minimal
ProjectsPage React code.

Preserve:
- the current layout
- existing colors
- rounded cards
- borders and offset shadows
- filters and sorting
- loading and empty states
- desktop and mobile behavior
- existing accessibility implementation

Precision:

- keep animations subtle and professional
- use durations between approximately 150ms and 250ms
- animate only transform, opacity, background-color, border-color, or
  box-shadow when possible
- do not animate layout dimensions
- do not cause content shifting
- do not make the entire project card a clickable element
- preserve visible keyboard focus indicators
- fully respect prefers-reduced-motion by removing or simplifying motion
- use regular CSS only

Do not use:
- Tailwind CSS
- shadcn/ui
- animation libraries
- inline styles
- excessive bouncing, spinning, glowing, or parallax effects
- the TypeScript any type

Example:

A project card may move upward by only a few pixels while its existing
offset shadow becomes slightly stronger.

The Live Demo arrow may move slightly to the right without changing the
button size.

Output:

Return:
1. Updated regular CSS
2. Any minimal React changes that are genuinely necessary
3. A short list of the micro-interactions added
4. An explanation of how reduced-motion users are accommodated

### Result
![alt text](prompt%20images/image-7.png)

### Evaluation
The fourth output improved the overall user experience by making
interactive elements respond more clearly to mouse and keyboard input.

The project cards, filters, sorting control, and action buttons felt more
polished without changing the approved layout or visual identity.
The animations were intentionally limited to short transitions using
transform, opacity, colors, and shadows to avoid layout shifting.

However, I just realized that if we input too long project title, it will overflow. So, the fifth prompt will fix the edge cases. 

## Prompt 5
Context:

Continue refining the same ProjectsPage from the previous responses.

The current design, responsive layout, filters, sorting, loading state,
empty state, accessibility, and micro-interactions are already approved.

Before the design is integrated into my existing portfolio, I want to test
whether it remains usable with realistic and inconsistent project content.

Role:

You are a senior product designer and React frontend developer specializing
in robust portfolio interfaces.

Instruction:

Stress-test and refine the current ProjectsPage using realistic content
variations and edge cases, without redesigning the page or adding new
features.

Test the interface with:

- a project title that is significantly longer than the others
- a project description that spans several lines
- a project with six or more technology badges
- a filter result containing only one project
- a sorting result with projects of different content lengths
- an empty filter result
- desktop, tablet, and approximately 320px mobile widths

Scope:

Modify only the ProjectsPage layout and CSS where necessary.

Preserve:
- the approved visual identity
- filters and sorting
- loading and empty states
- existing colors and CSS variables
- rounded cards, borders, badges, and offset shadows
- current accessibility and reduced-motion behavior
- regular CSS implementation

Precision:

Make sure that:

- long titles wrap without overlapping other content
- descriptions remain readable without being abruptly cut off
- technology badges wrap naturally
- cards in the same row remain visually balanced
- no layout shift occurs during hover or focus interactions

Do not:
- add new project properties
- add project images
- add search, pagination, statistics, or category navigation
- use Tailwind CSS, shadcn/ui, inline styles, or external libraries
- use the TypeScript any type
- redesign the approved page

Example:

A project with a long title and many technology badges should still align
visually with a shorter project card, while preserving readable content
and a consistently positioned action area.

Output:

1. Show the refined desktop and mobile previews using the edge-case data.
2. Explain which layout adjustments were needed.
3. Return only the updated ProjectsPage-related React code and regular CSS.
4. Clearly label all temporary edge-case data so it is not copied into the
   production project.

### Result : ![alt text](prompt%20images/image-8.png)
### Evaluation:
The fifth output was more robust because it tested the approved design
against realistic edge cases.

Long project titles and descriptions wrapped without overlapping other
content. Technology badges also wrapped naturally when a project contained
many technologies.

The project cards remained visually balanced despite having different
amounts of content, and their action areas stayed consistently positioned.
A filter result containing only one project retained the normal card width
instead of stretching across the desktop grid.

The mobile layout remained readable at a narrow viewport, and the content
did not create horizontal scrolling. Hover and focus interactions also
continued to work without causing layout shifts.

## Prompt Analysis
Using the CRISPE framework, I found that the prompt became more useful. However, when I tried to add more details, as shown in the second prompt, it did not work very well. It kept using Tailwind even when I told it not to. I think this happened because the prompt contained too many details. Therefore, a prompt should be clear and effective. 