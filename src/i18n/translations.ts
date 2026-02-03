export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    // Navbar
    nav: {
      about: '关于我们',
      pipeline: '研发管线',
      platform: '科学平台',
      diseases: '疾病领域',
      publications: '发表文献',
      news: '新闻动态',
      contact: '联系我们',
      investor: '投资者关系',
    },
    // Hero
    hero: {
      badge: '驭光同驰',
      title1: '寻省绎理',
      title2: '济人利物',
      subtitle: '寻济生物科技（北京）有限公司专注于开发创新蛋白药物，为眼底疾病患者提供更安全、更有效的治疗方案',
      exploreTech: '探索我们的技术',
      explorePipeline: '了解研发管线',
      scrollDown: '向下滚动',
      stats: {
        projects: '在研项目',
        platforms: '核心技术平台',
        patients: '潜在受益患者',
      },
    },
    // About
    about: {
      badge: '关于寻济',
      title: '我们的使命',
      missionStatement: 'Quaerite et invenietis — 寻求并找到治愈之道',
      companyName: '寻济生物科技（北京）有限公司',
      companyDesc1: '是一家专注于眼底疾病治疗的创新生物医药企业，总部位于北京。我们致力于开发创新蛋白药物，为全球患者提供更安全、更有效的治疗方案。',
      companyDesc2: '公司名称"Quaerite"源自拉丁语，意为"寻求"或"寻找"，与我们的中文名"寻济"相呼应——寻求治愈之道，济世救人。我们以此命名，彰显我们致力于探索新路径、不断为患者和行业带来创新药物和解决方案的使命。',
      mission: {
        title: '使命',
        content: '推动创新蛋白药物和递送技术的发展，对抗威胁视力的眼部疾病',
      },
      vision: {
        title: '愿景',
        content: '成为眼科领域领先的研究型生物技术公司，为患者带来希望与光明',
      },
      values: {
        title: '核心价值观',
        content: '以科学为基础，勇于挑战，开放包容，敏捷高效，勇于创新，不断突破；保持好奇，保持活力',
      },
      stats: {
        experience: '年研发经验',
        projects: '在研项目',
        platforms: '核心技术平台',
        patients: '潜在受益患者',
      },
      features: {
        focus: {
          title: '专注眼底疾病',
          desc: '深耕眼科治疗领域，针对年龄相关性黄斑变性、糖尿病黄斑水肿等开发创新疗法',
        },
        expert: {
          title: '蛋白药物专家',
          desc: '拥有完整的蛋白发现、优化、生产平台，具备从靶点验证到临床申报的全链条能力',
        },
        global: {
          title: '国际化标准',
          desc: '严格按照FDA、EMA、NMPA国际标准开展研发，确保产品质量与安全性',
        },
      },
    },
    // Pipeline
    pipeline: {
      badge: '研发管线',
      title: '创新在研项目',
      subtitle: '我们拥有丰富的研发管线，覆盖多种眼底疾病领域，致力于为患者提供更多治疗选择',
      table: {
        project: '项目',
        indications: '适应症',
      },
      product: {
        highlights: '产品亮点',
        indications: '目标适应症',
        progress: '研发进度',
      },
      indications: {
        title: '适应症说明',
        wamd: '湿性年龄相关性黄斑变性',
        dme: '糖尿病黄斑水肿',
        rvo: '视网膜静脉阻塞',
        ga: '地理性萎缩',
        ted: '甲状腺眼病',
        ume: '葡萄膜炎性黄斑水肿',
        dr: '糖尿病视网膜病变',
        dmi: '糖尿病黄斑缺血',
      },
      products: {
        qbr202: {
          name: 'QBR202',
          fullName: 'anti-VEGFA/anti-ANG2 fusion protein',
          desc: '下一代抗VEGF-A/ANG2融合蛋白，具有卓越的药理活性、更长的眼内半衰期和最佳组织分布',
          highlights: [
            '双靶点机制：同时阻断VEGF-A和ANG-2',
            '卓越生物活性：体外实验显示优于Faricimab',
            '长效制剂：减少注射频率，提高患者依从性',
            '玻璃体腔注射：标准给药途径',
          ],
        },
        qbr207: {
          name: 'QBR207',
          fullName: 'anti-complement multi-target fusion protein',
          desc: '下一代地理性萎缩(GA)治疗药物，基于对补体生物学的深入洞察设计',
          highlights: [
            '多靶点补体抑制',
            '针对干性AMD晚期阶段',
            '创新分子设计',
            '潜在最佳治疗方案',
          ],
        },
        qbr209: {
          name: 'QBR209',
          fullName: 'anti-VEGFA/anti-ANG2/anti-inflammatory',
          desc: '三特异性融合蛋白，同时靶向VEGF-A、ANG-2和炎症通路，提供更全面的治疗效果',
          highlights: [
            '三靶点协同作用',
            '抗炎+抗血管生成',
            '适用于多种眼底疾病',
            '延长治疗间隔',
          ],
        },
        qbr210: {
          name: 'QBR210',
          fullName: 'FZD4/LRP5 targeted Norrin-mimetic',
          desc: '靶向FZD4/LRP5的Norrin模拟物，通过激活Wnt信号通路促进血管稳定',
          highlights: [
            '创新作用机制',
            'Norrin/Wnt通路激活',
            '促进血管稳定',
            '针对糖尿病视网膜病变',
          ],
        },
      },
      phases: {
        ind: 'IND准备',
        pcc: 'PCC阶段',
        discovery: '发现阶段',
      },
    },
    // Platform
    platform: {
      badge: '科学平台',
      title: '核心技术平台',
      subtitle: '基于眼底疾病的生理特点和临床需求，我们开发了专用于玻璃体腔注射的高浓度蛋白药物技术平台，整合多特异性抗体技术与半衰期延长技术',
      features: {
        multispecific: {
          title: '多特异性抗体平台',
          subtitle: 'Multi-specific Antibody Platform',
          desc: '即插即用的模块化设计，通过协同靶向实现增强的治疗效果。双位点调节增强结合强度和生物活性，促进受体聚集以调节下游信号传导。',
          details: [
            '即插即用模块化设计：快速适配特定靶点的抗体设计',
            '双位点调节：增强结合和受体相互作用以优化治疗效果',
            '多样化抗体形式：适用于广泛临床应用的灵活抗体结构',
            '先进连接子技术：定制化连接子系统实现最佳生物活性和稳定性',
            '组织靶向优化：精准递送至靶组织以增强治疗效果',
          ],
        },
        modular: {
          title: '模块化架构',
          subtitle: 'Modular Architecture',
          desc: '通过结构域交换和标准化接口，可快速创建新的抗体构建体。混合匹配靶向结构域，生成具有协同效应的多特异性抗体。',
          details: [
            '结构域交换：跨构建体交换可变区或VHH模块以快速适配',
            '多功能连接子：使多种抗体形式的无缝组装成为可能',
            '可扩展性：无需为每种变体进行大量新工程即可扩展组合多样性',
            '疾病中心靶点：针对多基因疾病靶向多种疾病通路',
            '快速迭代：标准化模块加速先导优化',
          ],
        },
        halflife: {
          title: 'OcuHLE-X® 半衰期延长',
          subtitle: 'Half-life Extension Technology',
          desc: '专有的半衰期延长技术平台，通过增加流体动力学半径(Rh)延长眼内半衰期。玻璃体腔注射的生物制剂药物半衰期与Rh呈正相关。',
          details: [
            '非共价结合：融合蛋白与半衰期延长辅料(HLEx)形成高分子量复合物',
            '人源辅料分子：降低安全风险，增强稳定性',
            '可控调节：可调控的半衰期延长效果',
            '低粘度高稳定性：支持30G针头玻璃体腔注射',
            '可扩展生产工艺：类似传统抗体药物的生产工艺',
          ],
        },
        formulation: {
          title: '制剂工程',
          subtitle: 'Formulation Engineering',
          desc: '专为玻璃体腔注射设计的优化制剂，具有理想的理化性质，确保眼内持久性和安全性。',
          details: [
            '低粘度：QBR202 DP (50 mg/mL) 粘度仅8.73 mPa·s',
            '低内毒素水平：< 0.2 EU/mL，符合USP玻璃体腔注射标准',
            '低亚可见颗粒：符合USP颗粒标准',
            '等渗配方：240-360 mOsmol/kg，与玻璃体液等渗',
            '优异稳定性：3-5次冻融循环后仍保持稳定',
          ],
        },
      },
      ocuHLE: {
        badge: '核心技术',
        title: 'OcuHLE-X®',
        subtitle: '专有的半衰期延长技术平台，通过"分子+制剂工程"整体解决方案，实现可控的眼内持久性',
        designTitle: 'OcuHLE-X® 设计原理',
        modules: {
          a: '高活性靶点结合模块（确保低最低有效浓度）',
          b: '辅料结合模块（高亲和力、高特异性）',
          c: '人源辅料分子（降低安全风险，增强稳定性）',
        },
        features: [
          '形成高分子量复合物(HMWC)',
          '增加流体动力学半径(Rh)',
          '延长玻璃体腔扩散时间',
          '支持30G针头注射',
        ],
        rhTitle: '流体动力学半径(Rh)对比',
        rhSubtitle: '玻璃体腔注射生物制剂的半衰期与Rh呈正相关',
        rhNote: '关键发现：正常Fab/Fc格式抗体的Rh为2.5-5 nm，OcuHLE-X®技术可将Rh增加至6-8 nm，显著延长半衰期',
      },
      formulationData: {
        viscosityTitle: '粘度对比',
        viscositySubtitle: '50 mg/mL浓度下的粘度表现',
        qualityTitle: '质量标准',
        endotoxin: '内毒素',
        particles: '亚可见颗粒',
        osmolality: '渗透压',
        stability: '稳定性',
      },
      rdCapability: '内部研发能力',
    },
    // Diseases
    diseases: {
      badge: '疾病领域',
      title: '威胁视力的眼底疾病',
      subtitle: '我们专注于解决全球数亿患者面临的未满足临床需求',
      solution: {
        title: '我们的解决方案',
        desc: '通过创新的蛋白药物技术平台，我们致力于为患者提供更安全、更有效、更便捷的治疗方案',
        cta: '查看研发管线',
      },
      wamd: {
        name: '湿性年龄相关性黄斑变性',
        shortName: '湿性 AMD',
        englishName: 'wet Age-related Macular Degeneration',
        desc: '湿性AMD以黄斑区新生血管形成和血管渗漏为特征，约占所有AMD病例的10-20%，导致相对严重且快速的视力丧失。血管内皮生长因子(VEGF)驱动脉络膜新生血管的异常发育，导致视网膜下出血、视网膜色素上皮脱离或萎缩，或视网膜下水肿，以及相关的视力丧失。',
        treatmentTitle: '现有治疗方案',
        unmetTitle: '未满足需求',
      },
      dryamd: {
        name: '干性年龄相关性黄斑变性',
        shortName: '干性 AMD / GA',
        englishName: 'Dry AMD / Geographic Atrophy',
        desc: '干性AMD是非血管渗漏型AMD亚型，以视网膜萎缩为主要病理特征，导致渐进性视力丧失。地理性萎缩(GA)是干性AMD的晚期阶段，特征为视网膜色素上皮(RPE)、光感受器和脉络膜血管的进行性萎缩和丧失。',
      },
      dme: {
        name: '糖尿病黄斑水肿',
        shortName: 'DME',
        englishName: 'Diabetic Macular Edema',
        desc: '糖尿病黄斑水肿是一种常见的视网膜疾病，特征为黄斑区渗出物形成和肿胀，导致视力损害。病理生理过程始于慢性高血糖，VEGF介导的血管通透性与炎症因子之间的相互作用是最重要的病理机制。',
      },
      stats: {
        patients: '全球患者',
        projected: '预计患者',
        blindness: '致盲率',
        market: '市场规模',
      },
    },
    // Publications
    publications: {
      badge: '科研成果',
      title: '发表文献',
      subtitle: '我们在国际顶级期刊发表多篇研究论文，展示公司在生物医药领域的研发实力',
      stats: {
        papers: '发表论文',
        journals: '国际期刊',
        fields: '研究领域',
      },
      categories: ['全部', '纳米抗体', '蛋白工程', '纳米药物', '制剂技术', '治疗策略', '蛋白治疗'],
      viewMore: '查看更多文献',
    },
    // News
    news: {
      badge: '新闻动态',
      title: '最新资讯',
      subtitle: '了解寻济生物的最新进展、临床里程碑和行业动态',
      categories: ['全部', '临床进展', '监管进展', '公司新闻', '学术会议'],
      readMore: '阅读全文',
      collapse: '收起详情',
      linkedin: 'LinkedIn',
      timeline: '里程碑时间线',
      viewMore: '查看更多动态',
      articles: {
        article1: {
          title: 'QBR202 Phase I 临床试验启动会成功召开',
          titleEn: "Quaerite Successfully Convenes Inaugural Investigators' Meeting for QBR202 Phase I Clinical Trial",
          summary: '2026年1月31日，寻济生物在上海成功召开了首次研究者会议，正式启动了QBR202的I期临床试验。',
          content: `2026年1月31日，寻济生物在上海成功召开了首次研究者会议，正式启动了QBR202的I期临床试验。QBR202是我们自主研发的创新玻璃体腔注射药物，用于治疗新生血管性年龄相关性黄斑变性（nAMD）和糖尿病黄斑水肿（DME）。

来自参与医院的主要研究者们齐聚一堂，深入了解QBR202分子的创新设计原理、模块化组件的协同效应，以及临床前研究中观察到的 promising 长效疗效。

我们即将快速推进，首位患者给药预计将在未来几周内进行。这标志着寻济生物在 delivering 变革性眼科治疗方案的使命中迈出了关键一步。`,
        },
        article2: {
          title: 'QBR202获得FDA和NMPA IND批准',
          titleEn: 'Quaerite Receives IND Clearances from FDA and NMPA for QBR202',
          summary: '寻济生物先后于2025年12月和2026年1月获得美国FDA和中国NMPA的IND批准，标志着公司从发现阶段正式进入临床开发阶段。',
          content: `我们很高兴地宣布，寻济生物先后于2025年12月获得美国食品药品监督管理局（FDA）的IND批准，于2026年1月获得中国国家药品监督管理局（NMPA）的IND批准。

这一重要的监管里程碑标志着公司从发现阶段正式进入临床开发阶段。我们的领先候选药物QBR202是一款首创的三特异性抗体，通过玻璃体腔注射用于治疗新生血管性年龄相关性黄斑变性（nAMD）和糖尿病黄斑水肿（DME），具有大幅延长治疗间隔的潜力。

首位患者给药预计将在未来几周内开始。关于QBR202的更多详细信息将于2026年5月在美国举行的视觉与眼科研究协会（ARVO）年会上以海报形式展示。我们期待在项目进展过程中分享更多更新。`,
        },
      },
    },
    // Contact
    contact: {
      badge: '联系我们',
      title: '开启合作之旅',
      subtitle: '无论是商务合作、投资咨询还是学术交流，我们期待与您的对话',
      info: {
        address: {
          title: '公司地址',
          line1: '北京市海淀区杏石口路65号',
          line2: '益园C区9号楼2层',
        },
        phone: {
          title: '联系电话',
          number: '+86 10 6994 5859',
          time: '周一至周五 9:00-18:00',
        },
        email: {
          title: '电子邮箱',
          address: 'info@quaerite.com',
          note: '商务合作与投资者关系',
        },
        hours: {
          title: '工作时间',
          days: '周一至周五',
          time: '09:00 - 18:00',
        },
      },
      form: {
        title: '发送消息',
        subtitle: '填写以下表单，我们会尽快回复您',
        name: '您的姓名',
        email: '电子邮箱',
        company: '公司名称',
        message: '留言内容',
        send: '发送消息',
        success: '消息已发送',
        successMsg: '感谢您的留言，我们会尽快与您联系',
        privacy: '提交表单即表示您同意我们的隐私政策',
      },
      location: '公司位置',
    },
    // Footer
    footer: {
      desc: '专注于眼底疾病治疗的创新生物医药企业，致力于为全球患者带来希望与光明。',
      links: {
        company: '公司',
        research: '研究',
        news: '新闻',
        contact: '联系',
      },
      copyright: '© 2026 寻济生物科技（北京）有限公司. All rights reserved.',
      privacy: '隐私政策',
      terms: '使用条款',
      sitemap: '网站地图',
    },
  },
  en: {
    // Navbar
    nav: {
      about: 'About Us',
      pipeline: 'Pipeline',
      platform: 'Platform',
      diseases: 'Diseases',
      publications: 'Publications',
      news: 'News',
      contact: 'Contact',
      investor: 'Investor Relations',
    },
    // Hero
    hero: {
      badge: 'Pioneering Ocular Therapies',
      title1: 'Seeking Cures',
      title2: 'Saving Sight',
      subtitle: 'Quaerite Biopharm Research is dedicated to developing innovative protein therapeutics for patients with retinal diseases',
      exploreTech: 'Explore Our Technology',
      explorePipeline: 'View Pipeline',
      scrollDown: 'Scroll Down',
      stats: {
        projects: 'Pipeline Programs',
        platforms: 'Core Platforms',
        patients: 'Potential Patients',
      },
    },
    // About
    about: {
      badge: 'About Quaerite',
      title: 'Our Mission',
      missionStatement: 'Quaerite et invenietis — Seek and you shall find',
      companyName: 'Quaerite Biopharm Research',
      companyDesc1: ' is an innovative biopharmaceutical company focused on treating retinal diseases, headquartered in Beijing. We are committed to developing innovative protein therapeutics to provide safer and more effective treatment options for patients worldwide.',
      companyDesc2: 'The name "Quaerite" is derived from Latin, meaning "seek" or "look for," echoing our Chinese name "寻济" (Xun Ji) — seeking cures to benefit humanity. This name reflects our mission to explore new pathways and continuously bring innovative medicines and solutions to patients and the industry.',
      mission: {
        title: 'Mission',
        content: 'To drive innovative protein therapeutics and delivery technologies to combat vision-threatening ocular diseases',
      },
      vision: {
        title: 'Vision',
        content: 'To become a leading research-oriented biotechnology company in ophthalmology, bringing hope and light to patients',
      },
      values: {
        title: 'Core Values',
        content: 'Science-based, challenge-driven, open-minded, agile, innovative, breakthrough-oriented; stay curious, stay energetic',
      },
      stats: {
        experience: 'Years R&D Experience',
        projects: 'Pipeline Programs',
        platforms: 'Core Platforms',
        patients: 'Potential Patients',
      },
      features: {
        focus: {
          title: 'Retinal Disease Focus',
          desc: 'Deep expertise in ophthalmic therapeutics, developing innovative treatments for AMD, DME, and other retinal diseases',
        },
        expert: {
          title: 'Protein Therapeutics Expert',
          desc: 'Complete protein discovery, optimization, and production platform with end-to-end capabilities from target validation to clinical filing',
        },
        global: {
          title: 'Global Standards',
          desc: 'R&D conducted in strict accordance with FDA, EMA, and NMPA international standards to ensure product quality and safety',
        },
      },
    },
    // Pipeline
    pipeline: {
      badge: 'Pipeline',
      title: 'Innovative Pipeline',
      subtitle: 'We have a robust pipeline covering multiple retinal disease indications, committed to providing more treatment options for patients',
      table: {
        project: 'Program',
        indications: 'Indications',
      },
      product: {
        highlights: 'Product Highlights',
        indications: 'Target Indications',
        progress: 'Development Progress',
      },
      indications: {
        title: 'Indication Guide',
        wamd: 'wet Age-related Macular Degeneration',
        dme: 'Diabetic Macular Edema',
        rvo: 'Retinal Vein Occlusion',
        ga: 'Geographic Atrophy',
        ted: 'Thyroid Eye Disease',
        ume: 'Uveitic Macular Edema',
        dr: 'Diabetic Retinopathy',
        dmi: 'Diabetic Macular Ischemia',
      },
      products: {
        qbr202: {
          name: 'QBR202',
          fullName: 'anti-VEGFA/anti-ANG2 fusion protein',
          desc: 'Next-generation anti-VEGF-A/ANG2 fusion protein with superior pharmacological activity, longer ocular half-life, and optimal tissue distribution',
          highlights: [
            'Dual-target mechanism: Simultaneous blockade of VEGF-A and ANG-2',
            'Superior biological activity: In vitro data shows better efficacy than Faricimab',
            'Long-acting formulation: Reduced injection frequency, improved patient compliance',
            'Intravitreal injection: Standard administration route',
          ],
        },
        qbr207: {
          name: 'QBR207',
          fullName: 'anti-complement multi-target fusion protein',
          desc: 'Next-generation GA therapy designed based on deep insights into complement biology',
          highlights: [
            'Multi-target complement inhibition',
            'Targeting advanced dry AMD',
            'Novel molecular design',
            'Potential best-in-class therapy',
          ],
        },
        qbr209: {
          name: 'QBR209',
          fullName: 'anti-VEGFA/anti-ANG2/anti-inflammatory',
          desc: 'Tri-specific fusion protein targeting VEGF-A, ANG-2, and inflammatory pathways for comprehensive therapeutic effects',
          highlights: [
            'Triple-target synergistic action',
            'Anti-inflammatory + anti-angiogenic',
            'Applicable to multiple retinal diseases',
            'Extended treatment intervals',
          ],
        },
        qbr210: {
          name: 'QBR210',
          fullName: 'FZD4/LRP5 targeted Norrin-mimetic',
          desc: 'FZD4/LRP5-targeted Norrin mimetic that promotes vascular stability through Wnt pathway activation',
          highlights: [
            'Novel mechanism of action',
            'Norrin/Wnt pathway activation',
            'Promotes vascular stabilization',
            'Targeting diabetic retinopathy',
          ],
        },
      },
      phases: {
        ind: 'IND-Enabling',
        pcc: 'PCC',
        discovery: 'Discovery',
      },
    },
    // Platform
    platform: {
      badge: 'Technology Platform',
      title: 'Core Technology Platforms',
      subtitle: 'Based on the physiological characteristics and clinical needs of retinal diseases, we have developed a proprietary technology platform for high-concentration protein drugs for intravitreal injection, integrating multi-specific antibody technology with half-life extension technology',
      features: {
        multispecific: {
          title: 'Multi-specific Antibody Platform',
          subtitle: 'Multi-specific Antibody Platform',
          desc: 'Plug-and-play modular design with synergistic targeting for enhanced therapeutic effects. Biparatopic modulation enhances binding strength and biological activity, promoting receptor clustering to modulate downstream signaling.',
          details: [
            'Plug-and-Play Modular Design: Rapidly adapt antibody designs for specific targets',
            'Biparatopic Modulation: Enhanced binding and receptor interaction to optimize therapeutic effects',
            'Diverse Antibody Formats: Versatile antibody structures for broad clinical applications',
            'Advanced Linker Technology: Customized linker systems for optimal biological activity and stability',
            'Tissue-Targeting Optimization: Precise delivery to targeted tissues for enhanced therapeutic outcomes',
          ],
        },
        modular: {
          title: 'Modular Architecture',
          subtitle: 'Modular Architecture',
          desc: 'Through domain swapping and standardized interfaces, new antibody constructs can be quickly created. Mix-and-match targeting domains to generate multi-specific antibodies with synergistic effects.',
          details: [
            'Domain Swapping: Swap variable regions or VHH modules across constructs for rapid adaptation',
            'Versatile Linkers: Enable seamless assembly of diverse antibody formats',
            'Scalability: Expand combinatorial diversity without extensive new engineering for each variation',
            'Disease-Centric Targets: Tailored to target multiple disease pathways for polygenic conditions',
            'Rapid Iteration: Standardized modules to accelerate lead optimization',
          ],
        },
        halflife: {
          title: 'OcuHLE-X® Half-life Extension',
          subtitle: 'Half-life Extension Technology',
          desc: 'Proprietary half-life extension technology platform that extends ocular half-life by increasing hydrodynamic radius (Rh). The half-life of biologics administered via IVT is positively correlated with Rh.',
          details: [
            'Non-covalent Binding: Fusion protein forms high molecular weight complex (HMWC) with half-life extension excipients (HLEx)',
            'Human-derived Excipients: Reduce safety risks and enhance stability',
            'Controllable Modulation: Tunable half-life extension effects',
            'Low Viscosity & High Stability: Support 30G needle intravitreal injection',
            'Scalable Manufacturing: Similar to traditional antibody drug production processes',
          ],
        },
        formulation: {
          title: 'Formulation Engineering',
          subtitle: 'Formulation Engineering',
          desc: 'Optimized formulation specifically designed for intravitreal injection with ideal physicochemical properties to ensure ocular durability and safety.',
          details: [
            'Low Viscosity: QBR202 DP (50 mg/mL) viscosity only 8.73 mPa·s',
            'Low Endotoxin Level: < 0.2 EU/mL, meets USP standard for intravitreal injection',
            'Low Subvisible Particulates: Meets USP particulate standards',
            'Isotonic Formulation: 240-360 mOsmol/kg, isotonic with vitreous body',
            'Excellent Stability: Remains stable after 3-5 freeze-thaw cycles',
          ],
        },
      },
      ocuHLE: {
        badge: 'Core Technology',
        title: 'OcuHLE-X®',
        subtitle: 'Proprietary half-life extension technology platform achieving controllable ocular durability through a "Molecular + Formulation Engineering" holistic solution',
        designTitle: 'OcuHLE-X® Design Scheme',
        modules: {
          a: 'High-activity target binding module (ensuring low minimum effective concentration)',
          b: 'Excipient-binding module (high affinity and high specificity)',
          c: 'Human-derived excipient molecules (reduce safety risks and enhance stability)',
        },
        features: [
          'Forms High Molecular Weight Complex (HMWC)',
          'Increases Hydrodynamic Radius (Rh)',
          'Prolongs Vitreal Diffusion Time',
          'Supports 30G Needle Injection',
        ],
        rhTitle: 'Hydrodynamic Radius (Rh) Comparison',
        rhSubtitle: 'The half-life of biologics administered via IVT is positively correlated with Rh',
        rhNote: 'Key Finding: Normal Fab/Fc format antibodies have Rh of 2.5-5 nm. OcuHLE-X® technology can increase Rh to 6-8 nm, significantly extending half-life',
      },
      formulationData: {
        viscosityTitle: 'Viscosity Comparison',
        viscositySubtitle: 'Viscosity performance at 50 mg/mL concentration',
        qualityTitle: 'Quality Standards',
        endotoxin: 'Endotoxin',
        particles: 'Subvisible Particulates',
        osmolality: 'Osmolality',
        stability: 'Stability',
      },
      rdCapability: 'Internalized R&D Capability',
    },
    // Diseases
    diseases: {
      badge: 'Disease Areas',
      title: 'Vision-Threatening Retinal Diseases',
      subtitle: 'We focus on addressing unmet clinical needs faced by hundreds of millions of patients worldwide',
      solution: {
        title: 'Our Solution',
        desc: 'Through our innovative protein therapeutic technology platform, we are committed to providing patients with safer, more effective, and more convenient treatment options',
        cta: 'View Pipeline',
      },
      wamd: {
        name: 'wet Age-related Macular Degeneration',
        shortName: 'wet AMD',
        englishName: 'wet Age-related Macular Degeneration',
        desc: 'wet AMD is characterized by neovascularization and vascular leakage in the macula, accounting for approximately 10-20% of all AMD cases, leading to relatively severe and rapid vision loss. Vascular endothelial growth factor (VEGF) drives the abnormal development of choroidal neovascularization, causing subretinal hemorrhage, retinal pigment epithelium detachment or atrophy, or subretinal edema, and associated vision loss.',
        treatmentTitle: 'Current Treatments',
        unmetTitle: 'Unmet Needs',
      },
      dryamd: {
        name: 'Dry Age-related Macular Degeneration',
        shortName: 'Dry AMD / GA',
        englishName: 'Dry AMD / Geographic Atrophy',
        desc: 'Dry AMD is a non-vascular leakage AMD subtype characterized by retinal atrophy, causing progressive vision loss. Geographic Atrophy (GA) is an advanced stage of dry AMD, characterized by progressive atrophy and loss of the retinal pigment epithelium (RPE), photoreceptors, and choroidal vasculature.',
      },
      dme: {
        name: 'Diabetic Macular Edema',
        shortName: 'DME',
        englishName: 'Diabetic Macular Edema',
        desc: 'Diabetic macular edema is a common retinal disease characterized by exudate formation and swelling in the macular area, leading to vision impairment. The pathophysiological process begins with chronic hyperglycemia, and the interaction between VEGF-mediated vascular permeability and inflammatory factors is the most important pathological mechanism.',
      },
      stats: {
        patients: 'Global Patients',
        projected: 'Projected',
        blindness: 'Blindness Rate',
        market: 'Market Size',
      },
    },
    // Publications
    publications: {
      badge: 'Scientific Publications',
      title: 'Publications',
      subtitle: 'We have published multiple research papers in top international journals, demonstrating our R&D capabilities in the biopharmaceutical field',
      stats: {
        papers: 'Publications',
        journals: 'International Journals',
        fields: 'Research Fields',
      },
      categories: ['All', 'Nanobody', 'Protein Engineering', 'Nanomedicine', 'Formulation', 'Therapeutic Strategy', 'Protein Therapeutics'],
      viewMore: 'View More Publications',
    },
    // News
    news: {
      badge: 'News & Updates',
      title: 'Latest News',
      subtitle: 'Stay informed about Quaerite\'s latest developments, clinical milestones, and industry updates',
      categories: ['All', 'Clinical Progress', 'Regulatory', 'Company News', 'Conferences'],
      readMore: 'Read More',
      collapse: 'Collapse',
      linkedin: 'LinkedIn',
      timeline: 'Milestone Timeline',
      viewMore: 'View More Updates',
      articles: {
        article1: {
          title: 'Quaerite Successfully Convenes Inaugural Investigators\' Meeting for QBR202 Phase I Clinical Trial',
          titleEn: "Quaerite Successfully Convenes Inaugural Investigators' Meeting for QBR202 Phase I Clinical Trial",
          summary: 'On January 31, 2026, Quaerite successfully convened its inaugural investigators\' meeting in Shanghai, officially launching the Phase I clinical trial for QBR202.',
          content: `On January 31, 2026, Quaerite successfully convened its inaugural investigators' meeting in Shanghai, officially launching the Phase I clinical trial for QBR202. QBR202 is our self-developed innovative intravitreal injection drug for the treatment of neovascular age-related macular degeneration (nAMD) and diabetic macular edema (DME).

Leading Principal Investigators from participating hospitals gathered to gain in-depth understanding of QBR202's innovative molecular design, the synergistic effects of its modular components, and the promising long-duration efficacy observed in preclinical studies.

We are now poised to advance rapidly, with first patient dosing anticipated in the coming weeks. This marks a pivotal step forward for Quaerite in our mission to deliver transformative ophthalmic therapies.`,
        },
        article2: {
          title: 'Quaerite Receives IND Clearances from FDA and NMPA for QBR202',
          titleEn: 'Quaerite Receives IND Clearances from FDA and NMPA for QBR202',
          summary: 'Quaerite received IND clearances from the U.S. FDA in December 2025 and from China NMPA in January 2026, marking the company\'s transition from discovery stage into clinical development.',
          content: `We are pleased to announce that Quaerite has received Investigational New Drug (IND) clearances from the U.S. Food and Drug Administration (FDA) in December 2025 and from China's National Medical Products Administration (NMPA) in January 2026.

This significant regulatory milestone marks the company's transition from the discovery stage into clinical development. Our lead candidate, QBR202, is a first-in-class tri-specific antibody designed for intravitreal injection to treat neovascular age-related macular degeneration (nAMD) and diabetic macular edema (DME), with the potential to greatly extend treatment intervals.

First patient dosing is scheduled to commence in the coming weeks. Further details regarding QBR202 will be presented in a poster session at the Association for Research in Vision and Ophthalmology (ARVO) Annual Meeting in May 2026 in the United States. We look forward to sharing further updates as the program progresses.`,
        },
      },
    },
    // Contact
    contact: {
      badge: 'Contact Us',
      title: 'Start a Conversation',
      subtitle: 'Whether for business partnerships, investment inquiries, or academic exchanges, we look forward to hearing from you',
      info: {
        address: {
          title: 'Address',
          line1: '2nd Floor, Building 9, Yiyuan C',
          line2: 'No. 65 Xingshikou Road, Haidian District, Beijing',
        },
        phone: {
          title: 'Phone',
          number: '+86 10 6994 5859',
          time: 'Mon-Fri 9:00-18:00',
        },
        email: {
          title: 'Email',
          address: 'info@quaerite.com',
          note: 'Business & Investor Relations',
        },
        hours: {
          title: 'Business Hours',
          days: 'Monday - Friday',
          time: '09:00 - 18:00',
        },
      },
      form: {
        title: 'Send a Message',
        subtitle: 'Fill out the form below and we will get back to you soon',
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Message',
        send: 'Send Message',
        success: 'Message Sent',
        successMsg: 'Thank you for your message. We will contact you soon.',
        privacy: 'By submitting this form, you agree to our privacy policy',
      },
      location: 'Our Location',
    },
    // Footer
    footer: {
      desc: 'An innovative biopharmaceutical company focused on treating retinal diseases, committed to bringing hope and light to patients worldwide.',
      links: {
        company: 'Company',
        research: 'Research',
        news: 'News',
        contact: 'Contact',
      },
      copyright: '© 2026 Quaerite Biopharm Research. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      sitemap: 'Sitemap',
    },
  },
};

export type Translations = typeof translations.zh;
