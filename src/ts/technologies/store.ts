import { CSharpLang, GoLang, NodeLang, SvelteLang, TsLang } from "../images";

export const Technologies: Technologies = [
  {
    className: "frontend",
    name: "Frontend",
    technologies: [
      {
        name: "NodeJS",
        site: "https://nodejs.org/",
        image: NodeLang,
      },
      {
        name: "Typescript",
        site: "https://www.typescriptlang.org/",
        image: TsLang,
      },
      {
        name: "Svelte",
        site: "https://www.svelte.dev/",
        image: SvelteLang,
      },
    ],
  },
  {
    className: "backend",
    name: "Backend",
    technologies: [
      {
        name: "C#",
        site: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        image: CSharpLang,
      },
      {
        name: "Go",
        site: "https://go.dev/",
        image: GoLang,
      },
    ],
  },
];
