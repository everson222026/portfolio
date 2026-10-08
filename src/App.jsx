import { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const assetPath = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Git & GitHub",
    "Figma",
    "Python",
  ];

  const projects = [
    {
      title: "Carômetro — IFAL",

      description:
        "Aplicação acadêmica para consultar os carômetros das turmas dos cursos técnicos do IFAL Campus Palmeira dos Índios.",

      details:
        "A página inicial identifica o Carômetro do IFAL Campus Palmeira dos Índios e organiza o acesso às turmas de Informática, Eletrotécnica, Edificações e Segurança do Trabalho. Cada cartão direciona para as turmas do curso. A interface enviada foi construída com HTML, Bootstrap 4 e jQuery.",

        technologies: ["HTML", "Bootstrap 4", "jQuery"],

        coverImage: "/projects/carometro-preview.svg",

        gallery: ["/projects/carometro-preview.svg"],

      link: "",
    },

    {
      title: "IDHub",

      description:
        "Painel acadêmico para docentes organizarem turmas, alunos, notas, atividades e frequência.",

      details:
        "O IDHub reúne ferramentas para criar turmas, cadastrar alunos e acompanhar informações acadêmicas, notas, atividades e frequência. A interface docente organiza essas tarefas em um painel autenticado. As imagens de apresentação são prévias sem dados pessoais.",

      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],

      coverImage: "/projects/idhub-preview.svg",

      gallery: ["/projects/idhub-turmas-preview.svg"],

      link: "https://id-hub.onrender.com/docente.html",
    },

    {
      title: "Baratie",

      description:
        "Experiência digital de um restaurante flutuante, com cardápio, reservas, avaliações e informações do Baratie.",

      details:
        "O projeto reúne a apresentação do restaurante, cardápio digital com categorias e sacola, reserva de mesa, pesquisa de satisfação, informações e atendimento. As capturas da galeria mostram as telas principais do site.",

      technologies: ["HTML", "CSS", "JavaScript"],

      coverImage: "/projects/baratie-capa.png",

      gallery: [
        "/projects/baratie-menu.png",
        "/projects/baratie-reservas.png",
        "/projects/baratie-avaliacao.png",
        "/projects/baratie-informacoes.png",
      ],

      link: "https://baratiefantech.netlify.app/",
    },

    {
      title: "Setembro Amarelo — FAN.tech",

      description:
        "Site de conscientização sobre saúde mental, acolhimento e prevenção, com histórias, orientações e caminhos para buscar ajuda.",

      details:
        "A campanha reúne uma página inicial e áreas de histórias e relatos, orientações sobre como apoiar alguém e informações para quem precisa de ajuda imediata. A seção de relatos permite enviar mensagens para análise antes da publicação.",

      technologies: ["HTML", "CSS", "JavaScript"],

      coverImage: "/projects/setembro-amarelo-capa.png",

      gallery: [
        "/projects/setembro-amarelo-historias.png",
        "/projects/setembro-amarelo-como-ajudar.png",
        "/projects/setembro-amarelo-ajuda-agora.png",
      ],

      link: "https://setembroamarelofan.netlify.app/",
    },

    {
      title: "Clínica Byakugou",

      description:
        "Site institucional de uma clínica odontológica fictícia, desenvolvido para criar uma experiência digital completa de atendimento e apresentação dos serviços.",

      details:
        "A Clínica Byakugou é um projeto fictício de um portal odontológico criado para simular a experiência digital de uma clínica moderna. A interface organiza os principais serviços e canais de atendimento em uma única página, incluindo atendimento presencial, atendimento virtual/farmácia, Espaço Kids e planos odontológicos. O projeto também apresenta informações de localização, área institucional e um sistema de agendamento consular simulado, com seleção de profissional, data e horário. O objetivo foi criar uma interface organizada, visualmente atrativa e com uma experiência próxima à de um portal profissional de uma clínica odontológica.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      coverImage: "/projects/clinica-byakugou/capa.png",

      gallery: [
        "/projects/clinica-byakugou/ex.png",
        "/projects/clinica-byakugou/ex1.png",
        "/projects/clinica-byakugou/ex2.png",
      ],

      link: "https://clinicabyakugou.netlify.app/",
    },

    {
      title: "Dust — Museu das Coisas Inúteis",

      description:
        "Plataforma digital que transforma objetos sem utilidade aparente em conteúdo compartilhado, humor e colecionismo.",

      details:
        "O Dust transforma o conceito de tralha em entretenimento: usuários cadastram, compartilham e exploram objetos curiosos, construindo uma comunidade de humor, criatividade e colecionismo. O documento descreve gestão de contas e autenticação, perfis e conexões, criação e publicação, feed e interações sociais, busca e descoberta, além de configurações e preferências.",

      technologies: [],

      coverImage: "/projects/dust-preview.svg",

      gallery: ["/projects/dust-feed-preview.svg"],

      link: "",
    },
  ];

  const education = [
    {
      date: "2018 — 2023",

      type: "FORMAÇÃO",

      title: "Técnico em Informática — IFAL",

      description:
        "Ensino médio técnico pelo Instituto Federal de Alagoas, com formação técnica em Informática.",
    },

    {
      date: "2022",

      type: "PESQUISA",

      title: "Bolsista CNPq — IFAL",

      description:
        "Participação como bolsista do CNPq em projeto de pesquisa na área de Informática pelo IFAL.",
    },

    {
      date: "2023",

      type: "EVENTO",

      title: "CSBC 2023 — João Pessoa",

      description:
        "Participação como espectador no XLIII Congresso da Sociedade Brasileira de Computação (CSBC 2023), realizado em João Pessoa.",
    },

    {
      date: "2026 — 2027",

      type: "EM ANDAMENTO",

      title: "Técnico em Programação — FanTech",

      description:
        "Curso técnico em Programação atualmente em andamento, com previsão de conclusão em 2027.",
    },
  ];

  const awards = [
    {
      year: "2015",

      title: "Medalha de Bronze — OBMEP",

      description:
        "Medalha de bronze na Olimpíada Brasileira de Matemática das Escolas Públicas.",
    },

    {
      year: "2016",

      title: "Medalha de Bronze — OBMEP",

      description:
        "Segunda medalha de bronze na Olimpíada Brasileira de Matemática das Escolas Públicas.",
    },

    {
      year: "2017",

      title: "Menção Honrosa — OBMEP",

      description:
        "Menção honrosa na Olimpíada Brasileira de Matemática das Escolas Públicas.",
    },
  ];

  const courses = [
    "ADATECH — HTML",
    "ADATECH — CSS",
    "ADATECH — JavaScript",
    "UFPE — Python",
  ];

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection("inicio")}
          >
            <span>&lt;</span> EVERSON <span>/&gt;</span>
          </button>

          <nav
            className={
              menuOpen
                ? "nav-links active"
                : "nav-links"
            }
          >

            <button
              onClick={() => scrollToSection("inicio")}
            >
              Início
            </button>

            <button
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </button>

            <button
              onClick={() =>
                scrollToSection("habilidades")
              }
            >
              Habilidades
            </button>

            <button
              onClick={() =>
                scrollToSection("projetos")
              }
            >
              Projetos
            </button>

            <button
              onClick={() =>
                scrollToSection("trajetoria")
              }
            >
              Trajetória
            </button>

            <button
              className="nav-contact"
              onClick={() =>
                scrollToSection("contato")
              }
            >
              Contato
            </button>

          </nav>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Abrir menu"
          >
            ☰
          </button>

        </div>

      </header>


      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          id="inicio"
          className="hero section"
        >

          <div className="hero-content">

            <div className="hero-text">

              <span className="eyebrow">
                DESENVOLVEDOR · PROGRAMADOR · TECNOLOGIA
              </span>

              <h1>

                Olá, eu sou

                <br />

                <strong>Everson.</strong>

              </h1>

              <p className="hero-description">

                Desenvolvedor em formação, apaixonado
                por tecnologia, programação, interfaces
                e criação de experiências digitais
                modernas e funcionais.

              </p>


              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() =>
                    scrollToSection("projetos")
                  }
                >

                  Ver projetos

                  <span>↗</span>

                </button>


                <button
                  className="secondary-button"
                  onClick={() =>
                    scrollToSection("contato")
                  }
                >

                  Entre em contato

                </button>

              </div>


              <div className="hero-socials">

                <a
                  href="mailto:eversonulisses2023@gmail.com"
                >
                  E-mail
                </a>

                <a
                  href="tel:+5582982152962"
                >
                  Telefone
                </a>

                <a
                  href="https://github.com/everson222026"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>


            {/* FOTO */}

            <div className="hero-photo-wrapper">

              <div className="photo-decoration"></div>

              <div className="hero-photo">

                <img
                  src={assetPath("/profile.jpg")}
                  alt="Foto de perfil de Everson Oliveira"
                />

              </div>

              <div className="available-badge">

                <span className="status-dot"></span>

                Aberto a oportunidades

              </div>

            </div>

          </div>


          <div className="scroll-indicator">

            <span></span>

            Role para explorar

          </div>

        </section>


        {/* =========================
            SOBRE
        ========================= */}

        <section
          id="sobre"
          className="section about-section"
        >

          <div className="section-header">

            <span className="section-number">
              01
            </span>

            <div>

              <span className="section-label">
                SOBRE MIM
              </span>

              <h2>
                Uma trajetória construída entre
                tecnologia, estudo e criação.
              </h2>

            </div>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p>

                Sou{" "}
                <strong>Everson Oliveira</strong>,
                estudante de tecnologia e
                desenvolvedor em formação, com
                trajetória na área de Informática
                e Programação.

              </p>


              <p>

                Minha formação começou no{" "}
                <strong>IFAL</strong>, onde cursei
                Ensino Médio Técnico em Informática
                entre 2018 e 2023. Atualmente,
                continuo minha formação no curso
                Técnico em Programação da{" "}
                <strong>FanTech</strong>, com
                conclusão prevista para 2027.

              </p>


              <p>

                Minha trajetória também inclui
                participação em projeto de pesquisa
                como bolsista do{" "}
                <strong>CNPq</strong>, participação
                no <strong>CSBC 2023</strong> e
                reconhecimentos na{" "}
                <strong>OBMEP</strong>.

              </p>

            </div>


            <div className="about-stats">

              <div className="stat-card">

                <span>01</span>

                <strong>
                  05 projetos
                </strong>

                <p>
                  Projetos para apresentar
                  no portfólio
                </p>

              </div>


              <div className="stat-card">

                <span>02</span>

                <strong>
                  09 tecnologias
                </strong>

                <p>
                  Desenvolvimento,
                  programação e design
                </p>

              </div>


              <div className="stat-card">

                <span>03</span>

                <strong>
                  03 reconhecimentos
                </strong>

                <p>
                  2 medalhas + 1 menção
                  honrosa na OBMEP
                </p>

              </div>


              <div className="stat-card">

                <span>04</span>

                <strong>
                  CNPq
                </strong>

                <p>
                  Bolsista em projeto
                  de pesquisa
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            HABILIDADES
        ========================= */}

        <section
          id="habilidades"
          className="section skills-section"
        >

          <div className="section-header">

            <span className="section-number">
              02
            </span>

            <div>

              <span className="section-label">
                HABILIDADES
              </span>

              <h2>
                Tecnologias e ferramentas.
              </h2>

            </div>

          </div>


          <div className="skills-layout">

            <div className="skills-intro">

              <p>

                Tecnologias estudadas e utilizadas
                em projetos de desenvolvimento web,
                mobile, interfaces e programação.

              </p>

            </div>


            <div className="skills-list">

              {skills.map((skill, index) => (

                <div
                  className="skill-item"
                  key={skill}
                >

                  <span>

                    {String(index + 1).padStart(2, "0")}

                  </span>

                  <strong>
                    {skill}
                  </strong>

                  <span className="skill-arrow">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            PROJETOS
        ========================= */}

        <section
          id="projetos"
          className="section projects-section"
        >

          <div className="section-header">

            <span className="section-number">
              03
            </span>

            <div>

              <span className="section-label">
                PROJETOS
              </span>

              <h2>
                Alguns trabalhos que desenvolvi.
              </h2>

            </div>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => {

              const isExpanded =
                expandedProject === project.title;

              return (

                <article
                  className={
                    isExpanded
                      ? "project-card project-card-expanded"
                      : "project-card"
                  }
                  key={project.title}
                >

                  {/* TOPO */}

                  <div className="project-top">

                    <span className="project-number">

                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    {project.link ? (

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={
                          `Abrir ${project.title}`
                        }
                      >
                        ↗
                      </a>

                    ) : (

                      <span className="project-placeholder-link">
                        ↗
                      </span>

                    )}

                  </div>


                  {/* CAPA */}

                  {project.coverImage ? (

                    <div className="project-preview project-preview-image">

                      <img
                        src={assetPath(project.coverImage)}
                        alt={
                          `Capa do projeto ${project.title}`
                        }
                      />

                      <div className="project-image-overlay"></div>

                      <div className="project-preview-content">

                        <span>
                          PROJECT
                        </span>

                        <strong>
                          {project.title}
                        </strong>

                      </div>

                    </div>

                  ) : (

                    <div className="project-preview">

                      <div className="project-preview-content">

                        <span>
                          PROJECT
                        </span>

                        <strong>
                          {project.title}
                        </strong>

                      </div>

                    </div>

                  )}


                  {/* CONTEÚDO */}

                  <div className="project-content">

                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.description}
                    </p>


                    {project.technologies.length >
                      0 && (

                      <div className="technology-list">

                        {project.technologies.map(
                          (technology) => (

                            <span
                              key={technology}
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                    )}


                    <button
                      className="project-expand-button"
                      onClick={() => {
                        setActiveGalleryImage(0);
                        setExpandedProject(
                          isExpanded
                            ? null
                            : project.title
                        );
                      }}
                    >

                      {isExpanded
                        ? "Fechar detalhes"
                        : "Ver detalhes"}

                      <span>

                        {isExpanded
                          ? "↑"
                          : "↓"}

                      </span>

                    </button>

                  </div>


                  {/* EXPANSÃO */}

                  {isExpanded && (

                    <div className="project-details">

                      <div className="project-details-copy">

                        <span className="section-label">
                          DETALHES DO PROJETO
                        </span>

                        <p>
                          {project.details}
                        </p>

                      </div>


                      <div className="project-gallery">

                        {project.gallery.length >
                        0 ? (

                          <div className="gallery-carousel">
                            <div className="gallery-stage">
                              <img
                                key={project.gallery[activeGalleryImage]}
                                src={assetPath(project.gallery[activeGalleryImage])}
                                alt={`${project.title} - imagem ${activeGalleryImage + 1}`}
                              />

                              <span className="gallery-counter">
                                {String(activeGalleryImage + 1).padStart(2, "0")}
                                <span> / </span>
                                {String(project.gallery.length).padStart(2, "0")}
                              </span>

                              <button
                                className="gallery-arrow gallery-arrow-previous"
                                type="button"
                                aria-label="Ver imagem anterior"
                                onClick={() =>
                                  setActiveGalleryImage(
                                    (activeGalleryImage - 1 + project.gallery.length) %
                                      project.gallery.length
                                  )
                                }
                              >
                                ←
                              </button>

                              <button
                                className="gallery-arrow gallery-arrow-next"
                                type="button"
                                aria-label="Ver próxima imagem"
                                onClick={() =>
                                  setActiveGalleryImage(
                                    (activeGalleryImage + 1) % project.gallery.length
                                  )
                                }
                              >
                                →
                              </button>
                            </div>

                            <div className="gallery-thumbnails" aria-label="Selecionar imagem">
                              {project.gallery.map((image, imageIndex) => (
                                <button
                                  className={
                                    imageIndex === activeGalleryImage
                                      ? "gallery-thumbnail gallery-thumbnail-active"
                                      : "gallery-thumbnail"
                                  }
                                  key={image}
                                  type="button"
                                  aria-label={`Ver imagem ${imageIndex + 1}`}
                                  aria-pressed={imageIndex === activeGalleryImage}
                                  onClick={() => setActiveGalleryImage(imageIndex)}
                                >
                                  <img src={assetPath(image)} alt="" />
                                  <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                        ) : (

                          <div className="gallery-placeholder">

                            <span>
                              IMAGENS DO PROJETO
                            </span>

                            <strong>
                              Adicione aqui as
                              imagens de{" "}
                              {project.title}.
                            </strong>

                            <small>
                              As imagens poderão
                              ser adicionadas
                              posteriormente
                              nessa galeria.
                            </small>

                          </div>

                        )}

                      </div>

                    </div>

                  )}

                </article>

              );

            })}

          </div>

        </section>


        {/* =========================
            TRAJETÓRIA
        ========================= */}

        <section
          id="trajetoria"
          className="section experience-section"
        >

          <div className="section-header">

            <span className="section-number">
              04
            </span>

            <div>

              <span className="section-label">
                FORMAÇÃO & TRAJETÓRIA
              </span>

              <h2>
                Estudos, pesquisa,
                eventos e reconhecimentos.
              </h2>

            </div>

          </div>


          <div className="timeline">

            {education.map((item) => (

              <div
                className="timeline-item"
                key={
                  `${item.date}-${item.title}`
                }
              >

                <div className="timeline-date">
                  {item.date}
                </div>


                <div className="timeline-line">

                  <span></span>

                </div>


                <div className="timeline-content">

                  <span className="timeline-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* CURSOS + OBMEP */}

          <div className="trajectory-grid">


            <div className="trajectory-box">

              <span className="section-label">
                CURSOS COMPLEMENTARES
              </span>

              <div className="course-list">

                {courses.map(
                  (course, index) => (

                    <div
                      className="course-item"
                      key={course}
                    >

                      <span>

                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}

                      </span>

                      <strong>
                        {course}
                      </strong>

                    </div>

                  )
                )}

              </div>

            </div>


            <div className="trajectory-box">

              <span className="section-label">
                OBMEP
              </span>

              <div className="award-list">

                {awards.map((award) => (

                  <div
                    className="award-item"
                    key={award.year}
                  >

                    <span>
                      {award.year}
                    </span>

                    <div>

                      <strong>
                        {award.title}
                      </strong>

                      <p>
                        {award.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CONTATO
        ========================= */}

        <section
          id="contato"
          className="section contact-section"
        >

          <div className="contact-box">

            <div className="contact-content">

              <span className="section-label">
                05 · CONTATO
              </span>


              <h2>

                Vamos trabalhar

                <br />

                <strong>juntos?</strong>

              </h2>


              <p>

                Estou aberto a novas oportunidades,
                projetos, colaborações e conexões
                profissionais.

              </p>


              <div className="contact-links">

                <a
                  className="contact-email"
                  href="mailto:eversonulisses2023@gmail.com"
                >

                  eversonulisses2023@gmail.com

                  <span>↗</span>

                </a>


                <a
                  className="contact-email"
                  href="tel:+5582982152962"
                >

                  (82) 9 8215-2962

                  <span>↗</span>

                </a>

              </div>

            </div>


            <div
              className="contact-decoration"
              aria-hidden="true"
            >

              <span>+</span>

              <span>+</span>

              <span>+</span>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="footer-container">

          <div>

            <strong>
              EVERSON OLIVEIRA
            </strong>

            <span>
              Desenvolvedor & Criador Digital
            </span>

          </div>


          <span>

            © {new Date().getFullYear()}
            {" · "}
            Todos os direitos reservados

          </span>


          <button
            onClick={() =>
              scrollToSection("inicio")
            }
            className="back-top"
          >

            Voltar ao topo ↑

          </button>

        </div>

      </footer>

    </div>
  );
}


export default App;