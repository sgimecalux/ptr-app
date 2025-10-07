// i18n.js
const I18N = {
  "pt-BR": {
    title_ptr: "PERMISSÃO DE TRABALHO DE RISCO - PTR",
    nav_settings: "Configurações", nav_dashboard:"Dashboard", nav_reports:"Relatórios", nav_help:"Ajuda",
    step1:"1) Dados Iniciais", step2:"2) Tipos de Atividades", step3:"3) Riscos",
    step4:"4) Equipamentos", step5:"5) Análise de Riscos & Checklist",
    step6:"6) Executantes da Atividade", step7:"7) Responsáveis da Atividade",
    step8:"8) Log de Não Conformidades",
    btn_draft:"Salvar Rascunho", btn_cancel:"Cancelar", btn_finish:"Concluir (PDF + ZIP)"
  },
  "es": {
    title_ptr: "PERMISO DE TRABAJO DE RIESGO - PTR",
    nav_settings:"Configuración", nav_dashboard:"Panel", nav_reports:"Informes", nav_help:"Ayuda",
    step1:"1) Datos Iniciales", step2:"2) Tipos de Actividades", step3:"3) Riesgos",
    step4:"4) Equipos", step5:"5) Análisis de Riesgos y Checklist",
    step6:"6) Ejecutantes de la Actividad", step7:"7) Responsables de la Actividad",
    step8:"8) Registro de No Conformidades",
    btn_draft:"Guardar Borrador", btn_cancel:"Cancelar", btn_finish:"Finalizar (PDF + ZIP)"
  },
  "en": {
    title_ptr:"PERMIT TO WORK - PTW",
    nav_settings:"Settings", nav_dashboard:"Dashboard", nav_reports:"Reports", nav_help:"Help",
    step1:"1) Initial Data", step2:"2) Activity Types", step3:"3) Risks",
    step4:"4) Equipment", step5:"5) Risk Analysis & Checklist",
    step6:"6) Workers", step7:"7) Responsible Parties",
    step8:"8) Nonconformity Log",
    btn_draft:"Save Draft", btn_cancel:"Cancel", btn_finish:"Finish (PDF + ZIP)"
  }
};

(function(){
  const lang = document.documentElement.getAttribute("lang") || "pt-BR";
  const L = I18N[lang] || I18N["pt-BR"];
  window.addEventListener("DOMContentLoaded",()=>{
    const map = {
      "#title-ptr":"title_ptr",
      "a[data-nav='settings']":"nav_settings",
      "a[data-nav='dashboard']":"nav_dashboard",
      "a[data-nav='reports']":"nav_reports",
      "a[data-nav='help']":"nav_help",
      "#t-step1":"step1","#t-step2":"step2","#t-step3":"step3","#t-step4":"step4",
      "#t-step5":"step5","#t-step6":"step6","#t-step7":"step7","#t-step8":"step8",
      "#btnSalvarRascunho":"btn_draft","#btnCancelar":"btn_cancel","#btnConcluir":"btn_finish"
    };
    Object.entries(map).forEach(([sel,key])=>{
      const el=document.querySelector(sel); if(el && L[key]) el.textContent=L[key];
    });
  });
})();
