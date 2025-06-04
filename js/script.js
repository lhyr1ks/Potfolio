const projectSelect = document.getElementById('projectSelect');
const output = document.getElementById('output');

projectSelect.addEventListener('change', () => {
  const value = projectSelect.value;
  output.innerHTML = '';

  if (value === 'sitevitrine') {
    output.innerHTML = `
      <div class="project-details fade-in">
        <h2>Mes projets de dev</h2>
        <p>Création d'un site web ayant pour but d'évaluer nos connaissances en HMTL/CSS/JS le but étant de créer un site qui repertorie toutes les SAE que l'on aura a réalisé durant notre parcours MMI.</p>
        <div class="embed-container">
          <iframe src="https://lhyr1ks.github.io/Premier-site-web-SAE-105/SAE%20105/" allowfullscreen></iframe>
        </div>
        <p>📄 <a href="https://docs.google.com/document/d/1Ng1Xs8h115TDuucbVpdmHZGdN2VGtVbp7VB-W-bhZSg/edit?tab=t.0#heading=h.tdnjn6vjd5vc" target="_blank">Consignes du projet (Google Doc)</a></p>
        <h2>Site BDD</h2>
        <p>Voici une présentation vidéo de mon projet PHP + MySQL développé avec Laragon, incluant la conception de la base de données, l'interactivité côté utilisateur et l'intégration dans un environnement local.</p>
        <div class="embed-container">
          <iframe src="https://www.youtube.com/embed/tRar6dbd3DE" allowfullscreen></iframe>
        </div>
        <p>📄 <a href="https://docs.google.com/document/d/1oOn-hbajGUwfaxqmCatFbwZ20eVUORHlF5nLtU-U-vA/edit?tab=t.0#heading=h.51ydbpgm1ac3" target="_blank">Consignes du projet (Google Doc)</a></p>
      </div>
    `;
  } 
  else if (value === 'audiovisuel') {
    output.innerHTML = `
      <div class="project-details fade-in">
        <h2>Interview</h2>
        <p>Réalisation d'une vidéo interview ayant pour but de me sensibiliser au montage ainsi qu'à l'utilisation du matériel (caméra, micro, etc).</p>
        <div class="video-link">
          <a href="https://youtube.com/shorts/mq_FmphefvE?feature=share" target="_blank">
            <img src="https://img.youtube.com/vi/mq_FmphefvE/hqdefault.jpg" alt="Miniature de l'interview" />
            <p>🎥 Voir la vidéo sur YouTube</p>
          </a>
        </div>

        <h2>Vidéo parasite</h2>
        <p>Réalisation d'une vidéo en anglais de présentation du film *Parasite* ayant pour but de parler à une communauté cinéphile anglophone.</p>
        <div class="video-link">
          <a href="https://youtu.be/3852tkhuQ1o" target="_blank">
            <img src="https://img.youtube.com/vi/3852tkhuQ1o/hqdefault.jpg" alt="Miniature de la présentation" />
            <p>🎥 Voir la vidéo sur YouTube</p>
          </a>
        </div>

        <p>📄 <a href="https://docs.google.com/document/d/1aQ9irqKOa6SsLuGpDBqg0v2KdkZXPXS3Zs57TYTvOxo/edit?tab=t.0" target="_blank">Consignes du projet</a></p>
      </div>
    `;
  } 
  else if (value === 'infographie') {
    output.innerHTML = `
      <div class="project-details fade-in">
        <h2>Moodboard pour réalisation de motifs</h2>
        <p>Réalisation de motifs en utilisant illustrator dans le cadre de ma SAE 103.</p>
        <iframe src="assets/pdfs/Moodboard Ylias LHUILLIER.pdf" width="100%" height="500px" style="border: 1px solid #ccc; border-radius: 10px;"></iframe>
        <p>📄 <a href="https://docs.google.com/document/d/1iNhVrHFF-6fcU4M7jTrpMwTDNN7wDfVXh5It-P5lCsg/edit?tab=t.0#heading=h.9326puaq0sde" target="_blank">Consignes du projet</a></p>

        <h2>Communiqué de presse pour un festival imaginaire</h2>
        <p>Réalisation d'un communiqué de presse dans le cadre de la création d'un festival de musique visant a perfectionner toutes nos compétences.</p>
        <iframe src="assets/pdfs/CP MysticLake Festival.pdf" width="100%" height="500px" style="border: 1px solid #ccc; border-radius: 10px;"></iframe>

        <p>📄 <a href="https://docs.google.com/document/d/1EOU-lqqjEj5gJPQotX7diMwdvnZxsC6YQJSBwgJI-WU/edit?tab=t.0#heading=h.76wborpjf2ph" target="_blank">Consignes du projet</a></p>
      </div>
    `;
  }
});  // <-- Ici se ferme le addEventListener('change')

document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  // Met toutes les barres à 0
  fills.forEach(fill => {
    fill.style.width = "0";
  });

  // Observer la section compétences
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(fill => {
          const targetWidth = fill.getAttribute("data-width");
          fill.style.width = targetWidth;
        });
        obs.disconnect(); // Stop après première apparition
      }
    });
  }, {
    threshold: 0.3
  });

  const skillSection = document.querySelector(".skills-section");
  if (skillSection) {
    observer.observe(skillSection);
  }
});