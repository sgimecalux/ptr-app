/* i18n simples: aplica em [data-i18n] e expõe i18n()/i18n_setLang() */

const I18N = {
  "pt-BR": {
    title:"PTR",
    header:{ title:"PERMISSÃO DE TRABALHO DE RISCO - PTR" },
    nav:{ settings:"Configurações", dashboard:"Dashboard", reports:"Relatórios", help:"Ajuda", home:"Início" },
    fields:{
      company:"Empresa", ptrcode:"Código PTR (sequencial)", date:"Data", time:"Hora",
      sector:"Setor", activity_desc:"Atividade (descrição livre)",
      add_executor:"Adicionar executante",
      emissor:"Emissor", leader:"Líder do Setor", team_resp:"Responsável da Equipe",
      sign_emissor:"Assinatura Emissor", sign_leader:"Assinatura Líder", sign_team:"Assinatura Resp. Equipe",
      signature:"Assinatura", nc_items:"Itens em não conformidade (um por linha)"
    },
    step1:{ title:"1) Dados Iniciais" },
    step2:{ title:"2) Tipos de Atividades", hint:"Edite em <strong>Configurações → Catálogos → Tipos de Atividade</strong>." },
    step3:{ title:"3) Riscos" },
    step4:{ title:"4) Equipamentos", hint:"Edite em <strong>Configurações → Catálogos → Equipamentos</strong>." },
    step5:{ title:"5) Análise de Riscos & Checklist" },
    step6:{ title:"6) Executantes da Atividade" },
    step7:{ title:"7) Responsáveis da Atividade" },
    step8:{ title:"8) Log de Não Conformidades", hint:"Esta área mostra automaticamente tudo que você marcou como <strong>NÃO</strong> no checklist; você pode complementar." },

    report:{
      title:"Permissão de Trabalho (PTR)", data:"Dados", meta:"Metadados",
      version:"Versão", revision:"Revisão", uid:"Código único", uid_short:"Código único",
      gen:"Gerado em", activities:"Atividades", risks:"Riscos", equip:"Equipamentos",
      executors:"Executantes", responsibles:"Responsáveis", nc:"Log de Não Conformidades",
      credits:"Créditos & Aviso"
    },

    footer:{ rev:"Revisão:" },

    badges:{ required:"Obrigatório", select:"Selecione", sign_required:"Assinatura obrigatória", three_required:"3 assinaturas obrigatórias", auto_edit:"Auto + editável" },

    yes:"SIM", no:"NÃO", na:"N/A", select:"Selecione…", risks:"riscos", critical:"(Crítico)", score:"Score",
    score:{ block:"Crítica — não liberar", critical:"Crítica — não permitir", need_tst:"Ação necessária — liberar com TST", need_actions:"Ação necessária — liberar", ok:"Itens conformes — liberar" },
    fit:"APTO", unfit:"INAPTO",

    bp:{ label:"Pressão arterial (ex.: 120/80) — ou N/A", na:"N/A", not_required:"PA não exigida para as atividades selecionadas.", short:"PA" },

    btn:{ add:"+ Adicionar", save_sign:"Salvar assinatura", clear:"Limpar", remove:"Remover", save_draft:"Salvar Rascunho", cancel:"Cancelar", finish:"Concluir (PDF + ZIP)", revise:"Revisar?" },

    msg:{
      select_activity:"Selecione um Tipo de Atividade.",
      empty_sign:"Assinatura vazia.",
      saved:"Salvo ✅",
      draft_saved:"Rascunho salvo ✅",
      discard:"Descartar tudo?",
      done:"PDF + ZIP gerados e registro arquivado ✅"
    },

    val:{
      fill_required:"Preencha Empresa, Código PTR, Data, Hora (HH:MM) e Setor.",
      select_activity:"Selecione ao menos um Tipo de Atividade.",
      add_executor:"Inclua ao menos um executante.",
      exec_sign:"Executante %: assinatura obrigatória.",
      exec_unfit:"Executante % está INAPTO.",
      select_responsibles:"Selecione Emissor, Líder e Responsável da Equipe.",
      sign_resp:"Assinaturas de Emissor, Líder e Responsável são obrigatórias.",
      score_block:"Score % — condição não permite liberar a PTR."
    }
  },

  "es": { /* traduções compactas */ 
    title:"PTR",
    header:{ title:"PERMISO DE TRABAJO DE RIESGO - PTR" },
    nav:{ settings:"Configuración", dashboard:"Panel", reports:"Informes", help:"Ayuda", home:"Inicio" },
    fields:{ company:"Empresa", ptrcode:"Código PTR (secuencial)", date:"Fecha", time:"Hora", sector:"Sector", activity_desc:"Actividad (descripción libre)", add_executor:"Agregar ejecutante", emissor:"Emisor", leader:"Líder del Sector", team_resp:"Responsable del Equipo", sign_emissor:"Firma Emisor", sign_leader:"Firma Líder", sign_team:"Firma Resp. Equipo", signature:"Firma", nc_items:"Ítems en no conformidad (uno por línea)" },
    step1:{ title:"1) Datos Iniciales" },
    step2:{ title:"2) Tipos de Actividades", hint:"Edite en <strong>Configuración → Catálogos → Tipos de Actividad</strong>." },
    step3:{ title:"3) Riesgos" },
    step4:{ title:"4) Equipos", hint:"Edite en <strong>Configuración → Catálogos → Equipos</strong>." },
    step5:{ title:"5) Análisis de Riesgos & Checklist" },
    step6:{ title:"6) Ejecutantes de la Actividad" },
    step7:{ title:"7) Responsables de la Actividad" },
    step8:{ title:"8) Log de No Conformidades", hint:"Aquí aparece automáticamente todo lo marcado como <strong>NO</strong> en el checklist; puede complementar." },
    report:{ title:"Permiso de Trabajo (PTR)", data:"Datos", meta:"Metadatos", version:"Versión", revision:"Revisión", uid:"Código único", uid_short:"Código único", gen:"Generado en", activities:"Actividades", risks:"Riesgos", equip:"Equipos", executors:"Ejecutantes", responsibles:"Responsables", nc:"Log de No Conformidades", credits:"Créditos & Aviso" },
    footer:{ rev:"Revisión:" },
    badges:{ required:"Obligatorio", select:"Seleccione", sign_required:"Firma obligatoria", three_required:"3 firmas obligatorias", auto_edit:"Auto + editable" },
    yes:"SÍ", no:"NO", na:"N/A", select:"Seleccione…", risks:"riesgos", critical:"(Crítico)", score:"Puntaje",
    score:{ block:"Crítico — no liberar", critical:"Crítico — no permitir", need_tst:"Acción necesaria — liberar con TST", need_actions:"Acción necesaria — liberar", ok:"Ítems conformes — liberar" },
    fit:"APTO", unfit:"NO APTO",
    bp:{ label:"Presión arterial (p.ej.: 120/80) — o N/A", na:"N/A", not_required:"PA no exigida para las actividades seleccionadas.", short:"PA" },
    btn:{ add:"+ Agregar", save_sign:"Guardar firma", clear:"Limpiar", remove:"Quitar", save_draft:"Guardar borrador", cancel:"Cancelar", finish:"Finalizar (PDF + ZIP)", revise:"¿Revisar?" },
    msg:{ select_activity:"Seleccione un Tipo de Actividad.", empty_sign:"Firma vacía.", saved:"Guardado ✅", draft_saved:"Borrador guardado ✅", discard:"¿Descartar todo?", done:"PDF + ZIP generados y registro archivado ✅" },
    val:{ fill_required:"Complete Empresa, Código PTR, Fecha, Hora (HH:MM) y Sector.", select_activity:"Seleccione al menos un Tipo de Actividad.", add_executor:"Incluya al menos un ejecutante.", exec_sign:"Ejecutante %: firma obligatoria.", exec_unfit:"Ejecutante % NO APTO.", select_responsibles:"Seleccione Emisor, Líder y Responsable del Equipo.", sign_resp:"Firmas de Emisor, Líder y Responsable obligatorias.", score_block:"Puntaje % — condición no permite liberar el PTR." }
  },

  "en": {
    title:"WPT", header:{ title:"WORK PERMIT TO WORK - PTR" },
    nav:{ settings:"Settings", dashboard:"Dashboard", reports:"Reports", help:"Help", home:"Home" },
    fields:{ company:"Company", ptrcode:"PTR code (sequential)", date:"Date", time:"Time", sector:"Sector", activity_desc:"Activity (free text)", add_executor:"Add executor", emissor:"Issuer", leader:"Area Leader", team_resp:"Team Responsible", sign_emissor:"Issuer Signature", sign_leader:"Leader Signature", sign_team:"Team Signature", signature:"Signature", nc_items:"Nonconformities (one per line)" },
    step1:{ title:"1) Initial Data" }, step2:{ title:"2) Activity Types", hint:"Edit at <strong>Settings → Catalogs → Activity Types</strong>." },
    step3:{ title:"3) Risks" }, step4:{ title:"4) Equipment", hint:"Edit at <strong>Settings → Catalogs → Equipment</strong>." },
    step5:{ title:"5) Risk Analysis & Checklist" }, step6:{ title:"6) Executors" }, step7:{ title:"7) Responsibles" }, step8:{ title:"8) NC Log", hint:"This area shows everything marked as <strong>NO</strong> in the checklist; you can add notes." },
    report:{ title:"Work Permit (PTR)", data:"Data", meta:"Metadata", version:"Version", revision:"Revision", uid:"Unique code", uid_short:"Unique code", gen:"Generated on", activities:"Activities", risks:"Risks", equip:"Equipment", executors:"Executors", responsibles:"Responsibles", nc:"NC Log", credits:"Credits & Notice" },
    footer:{ rev:"Revision:" },
    badges:{ required:"Required", select:"Select", sign_required:"Signature required", three_required:"3 signatures required", auto_edit:"Auto + editable" },
    yes:"YES", no:"NO", na:"N/A", select:"Select…", risks:"risks", critical:"(Critical)", score:"Score",
    score:{ block:"Critical — do not issue", critical:"Critical — not allowed", need_tst:"Actions required — issue with Safety", need_actions:"Actions required — issue", ok:"All compliant — issue" },
    fit:"FIT", unfit:"UNFIT",
    bp:{ label:"Blood pressure (e.g., 120/80) — or N/A", na:"N/A", not_required:"BP not required for selected activities.", short:"BP" },
    btn:{ add:"+ Add", save_sign:"Save signature", clear:"Clear", remove:"Remove", save_draft:"Save Draft", cancel:"Cancel", finish:"Finish (PDF + ZIP)", revise:"Revise?" },
    msg:{ select_activity:"Select at least one Activity Type.", empty_sign:"Empty signature.", saved:"Saved ✅", draft_saved:"Draft saved ✅", discard:"Discard everything?", done:"PDF + ZIP generated and archived ✅" },
    val:{ fill_required:"Fill Company, PTR Code, Date, Time (HH:MM) and Sector.", select_activity:"Select at least one Activity Type.", add_executor:"Add at least one executor.", exec_sign:"Executor %: signature required.", exec_unfit:"Executor % is UNFIT.", select_responsibles:"Select Issuer, Leader and Team Responsible.", sign_resp:"Issuer/Leader/Team signatures required.", score_block:"Score % — condition does not allow issuing." }
  }
};

let i18n_lang = localStorage.getItem('SYS_LANG') || 'pt-BR';

function i18n_setLang(lang){
  i18n_lang = (lang in I18N) ? lang : 'pt-BR';
  localStorage.setItem('SYS_LANG', i18n_lang);
  // aplica nos elementos estáticos
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.getAttribute('data-i18n').split('.');
    let ref = I18N[i18n_lang];
    for(const p of path){ if(ref && p in ref) ref = ref[p]; else { ref=null; break; } }
    if(typeof ref === 'string'){ el.innerHTML = ref; }
  });
}

function i18n(key){
  const path = key.split('.');
  let ref = I18N[i18n_lang];
  for(const p of path){ if(ref && p in ref) ref = ref[p]; else { return key; } }
  return (typeof ref === 'string') ? ref : key;
}

window.i18n_setLang = i18n_setLang;
window.i18n = i18n;

// aplica uma vez ao carregar
document.addEventListener('DOMContentLoaded', ()=> i18n_setLang(i18n_lang));
