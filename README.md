# APPDEV1 Final Practical Exam — Project Reflection

## Project Overview
This repository contains my final practical exam project for APPDEV1. The main objective was to take a provided Figma design for a Sign Up and Login interface, replicate it accurately in React using Vite, and build it incrementally using Git for version control. Throughout the project, I implemented custom styling with CSS Modules, standardized reusable design tokens in a root CSS file, and integrated Tailwind CSS along with shadcn/ui components.

---

## My Reflection

Building this application step-by-step was a great hands-on test of everything we’ve covered this semester. Recreating a Figma file from scratch forced me to pay close attention to spacing, colors, and layout structure rather than just guessing how things should look. 

One of the most valuable parts of this exam was working through the multi-stage Git workflow. Having to commit and push after every major UI milestone—and making sure each screenshot matched the exact progress—helped me appreciate how real development teams track feature builds and manage incremental releases. 

When refactoring the CSS into design tokens (`root.css`), I got to see firsthand why variable-based styling is so important. Instead of hunting down duplicate hex codes across multiple files, moving common colors and font rules into CSS custom properties made the codebase feel much cleaner and easier to maintain. 

Integrating Tailwind CSS and shadcn/ui at the end was probably the most challenging step because of the initial setup and path configuration, but replacing standard HTML inputs with custom shadcn `Input` components really elevated the overall look and feel of the forms. Overall, this practical exam gave me a lot more confidence in translating design files into clean, structured React code.