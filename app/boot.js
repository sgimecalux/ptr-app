// BOOT: catálogos com rótulos i18n embutidos
const BOOT = {
  LOCATIONS: [
    {key:"adm", labels:{"pt-BR":"Prédio ADM","es":"Edificio ADM","en":"Admin Building"}},
    {key:"fabrica", labels:{"pt-BR":"Fábrica","es":"Fábrica","en":"Factory"}},
  ],
  PEOPLE: [
    {id:1,nome:"João Silva",cpf:"111.111.111-11",perm:{exec:true,resp:true}, tr35:"2025-01-01", tr33:"2025-01-01"},
    {id:2,nome:"Maria Souza",cpf:"222.222.222-22",perm:{exec:true}, tr35:"2025-02-01"},
    {id:3,nome:"Carlos Lima",cpf:"333.333.333-33",perm:{resp:true}},
  ],

  ACTIVITIES: [
    {key:"trabalho_altura", labels:{"pt-BR":"Trabalho em Altura","es":"Trabajo en Altura","en":"Working at Height"}},
    {key:"espaco_confinado", labels:{"pt-BR":"Espaço Confinado","es":"Espacio Confinado","en":"Confined Space"}},
    {key:"eletricidade", labels:{"pt-BR":"Trabalho com Eletricidade","es":"Trabajo con Electricidad","en":"Electrical Work"}},
    {key:"a_quente", labels:{"pt-BR":"Trabalho à Quente","es":"Trabajo en Caliente","en":"Hot Work"}},
    {key:"icamento", labels:{"pt-BR":"Içamento de Materiais","es":"Izaje de Material","en":"Lifting Materials"}},
    {key:"escavacao", labels:{"pt-BR":"Escavação","es":"Excavación","en":"Excavation"}},
  ],

  EQUIPMENTS: [
    {key:"pea", labels:{"pt-BR":"Plataforma Elevatória","es":"Plataforma Elevadora","en":"Boom Lift"}},
    {key:"solda", labels:{"pt-BR":"Máquina de Solda","es":"Soldadora","en":"Welding Machine"}},
    {key:"lixadeira", labels:{"pt-BR":"Lixadeira/Furadeira","es":"Lijadora/Taladro","en":"Grinder/Drill"}},
    {key:"escada", labels:{"pt-BR":"Escada Marinheiro/Móvel","es":"Escalera Fija/Móvil","en":"Ladder"}},
  ],

  RISKS: [
    {key:"queda_pessoa", activities:["trabalho_altura"], labels:{"pt-BR":"Queda de pessoas","es":"Caída de personas","en":"Fall of people"}},
    {key:"queda_obj", activities:["trabalho_altura","icamento"], labels:{"pt-BR":"Queda de materiais","es":"Caída de objetos","en":"Falling objects"}},
    {key:"baixo_o2", activities:["espaco_confinado"], labels:{"pt-BR":"Baixo O₂","es":"Bajo O₂","en":"Low O₂"}},
    {key:"gas_tox", activities:["espaco_confinado"], labels:{"pt-BR":"Gás tóxico","es":"Gas tóxico","en":"Toxic gas"}},
    {key:"arco", activities:["eletricidade"], labels:{"pt-BR":"Arco elétrico","es":"Arco eléctrico","en":"Arc flash"}},
    {key:"incendio", activities:["a_quente"], labels:{"pt-BR":"Incêndio","es":"Incendio","en":"Fire"}},
    {key:"queda_carga", activities:["icamento"], labels:{"pt-BR":"Queda da carga","es":"Caída de la carga","en":"Load drop"}},
    {key:"soterr", activities:["escavacao"], labels:{"pt-BR":"Soterramento","es":"Sepultamiento","en":"Burial"}},
  ],

  CHECK_BASE: [
    {id:"base_trein", critico:true, peso:100, labels:{"pt-BR":"Treinamento da equipe (NRs aplicáveis)","es":"Capacitación del equipo","en":"Team training"}},
    {id:"base_isol",  peso:20, labels:{"pt-BR":"Área isolada / LOTO / Permissões","es":"Área aislada / LOTO / Permisos","en":"Area isolated / LOTO / Permits"}},
    {id:"base_epi",   peso:20, labels:{"pt-BR":"EPI/EPC corretos e inspecionados","es":"EPP/EPC correctos e inspeccionados","en":"PPE/EPC correct and inspected"}},
    {id:"base_resg",  peso:30, labels:{"pt-BR":"Plano de emergência/resgate","es":"Plan de emergencia/rescate","en":"Emergency/Rescue plan"}},
    {id:"base_inspec",peso:20, labels:{"pt-BR":"Inspeção pré-uso de equipamentos","es":"Inspección pre-uso de equipos","en":"Pre-use equipment inspection"}},
    {id:"base_cond",  peso:10, labels:{"pt-BR":"Condição climática/fadiga adequada","es":"Condición climática/fatiga adecuada","en":"Weather/fatigue adequate"}},
  ],

  // Itens de checklist por atividade/risco/equipamento
  CHECK_MAP: {
    activity:{
      "trabalho_altura":[
        {id:"atv_alt_anc", peso:20, labels:{"pt-BR":"Pontos de ancoragem definidos","es":"Puntos de anclaje definidos","en":"Anchorage points defined"}},
        {id:"atv_alt_cint",peso:20, labels:{"pt-BR":"Cinto paraquedista + talabarte OK","es":"Arnés anticaídas + talabarte OK","en":"Full-body harness + lanyard OK"}},
      ],
      "espaco_confinado":[
        {id:"atv_ec_perm",critico:true,peso:40, labels:{"pt-BR":"Permissão de Entrada e Trabalho emitida","es":"Permiso de Entrada y Trabajo emitido","en":"Entry Permit issued"}},
        {id:"atv_ec_monitor",peso:20, labels:{"pt-BR":"Monitoramento contínuo de gases","es":"Monitoreo continuo de gases","en":"Continuous gas monitoring"}},
      ],
      "eletricidade":[
        {id:"atv_ele_loto",critico:true,peso:40, labels:{"pt-BR":"LOTO aplicado / energia ausente","es":"LOTO aplicado / energía ausente","en":"LOTO applied / zero energy"}},
        {id:"atv_ele_epi", peso:20, labels:{"pt-BR":"EPI dielétrico e ferramentas isoladas","es":"EPP dieléctrico y herramientas aisladas","en":"Dielectric PPE & insulated tools"}},
      ],
      "a_quente":[
        {id:"atv_hot_perm",peso:20, labels:{"pt-BR":"Permissão de trabalho a quente","es":"Permiso de trabajo en caliente","en":"Hot work permit"}},
        {id:"atv_hot_vigia",peso:20, labels:{"pt-BR":"Vigia com extintor disponível","es":"Vigía con extintor disponible","en":"Fire watch with extinguisher"}},
      ],
      "icamento":[
        {id:"atv_ica_plano",peso:20, labels:{"pt-BR":"Plano de içamento aprovado","es":"Plan de izaje aprobado","en":"Lifting plan approved"}},
        {id:"atv_ica_area", peso:20, labels:{"pt-BR":"Área isolada e sinalizada","es":"Área aislada y señalizada","en":"Area isolated and signed"}},
      ],
      "escavacao":[
        {id:"atv_esc_aterro",peso:20, labels:{"pt-BR":"Taludes estáveis / escoramento","es":"Taludes estables / apuntalamiento","en":"Stable slopes / shoring"}},
        {id:"atv_esc_redes", peso:20, labels:{"pt-BR":"Levantamento de redes enterradas","es":"Levantamiento de redes enterradas","en":"Buried utilities survey"}},
      ],
    },
    risk:{
      "baixo_o2":[{id:"r_ec_aeracao",peso:20, labels:{"pt-BR":"Aeração/ventilação adequada","es":"Aireación/ventilación adecuada","en":"Adequate ventilation"}}],
      "incendio":[{id:"r_hot_inflam",peso:20, labels:{"pt-BR":"Retirada de inflamáveis no entorno","es":"Retiro de inflamables","en":"Remove flammables nearby"}}],
      "arco":[{id:"r_ele_dist",peso:20, labels:{"pt-BR":"Distâncias de segurança respeitadas","es":"Distancias de seguridad respetadas","en":"Clearance distances respected"}}],
      "queda_pessoa":[{id:"r_alt_zlq",peso:20, labels:{"pt-BR":"ZLQ calculada/atendida","es":"ZLQ calculada/atendida","en":"Free-fall clearance OK"}}],
      "queda_carga":[{id:"r_ica_acess",peso:20, labels:{"pt-BR":"Acessórios de içamento inspecionados","es":"Accesorios de izaje inspeccionados","en":"Lifting accessories inspected"}}],
      "soterr":[{id:"r_esc_acesso",peso:20, labels:{"pt-BR":"Acesso/escape garantido","es":"Acceso/escape garantizado","en":"Access/escape ensured"}}],
      "gas_tox":[{id:"r_ec_epi",peso:20, labels
