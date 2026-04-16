document.addEventListener("DOMContentLoaded",()=>{

const descriptions ={
    "FPT.jpg":"Ce véhicule est un FPT, ce qui signifie Fourgon Pompe-Tonne. C’est l’un des camions de pompiers les plus utilisés pour les incendies. Un FPT sert principalement à éteindre les feux et à intervenir rapidement sur différents types d’incidents. Il transporte généralement une équipe de 6 pompiers avec tout le matériel nécessaire pour lutter contre un incendie.",
    "VSAV.jpg":"Le VSAV est l’ambulance des pompiers. Il sert à porter secours aux personnes blessées ou malades et à les transporter vers l’hôpital. Il est généralement utilisé par une équipe de 3 pompiers. En l'occurrence, 4 en ma présence.",
    "EPAS.jpg":"L’EPSA est un camion de pompiers équipé d’une grande échelle qui peut se déployer en hauteur. Elle sert principalement à secourir des personnes dans les étages élevés et à attaquer les incendies depuis l’extérieur des bâtiments.",
    "SAC_PS.jpg":"Le sac PS est mon essentiel de travail pour le premier secours. Il contient le matériel de base pour faire les premiers soins, comme des pansements, du matériel pour vérifier les constantes ou aider à la respiration.",
};
const zone = document.getElementById("description-text");
document.addEventListener("click",(e) => { 
    const nom=e.target.getAttribute("src");
    zone.textContent = descriptions [nom] || "Aucune description disponible.";
});

});