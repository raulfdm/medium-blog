---
title: 'Configurando o deploy do sua aplicação no Netilfiy através do Github Actions'
description: ''
date: '2020-03-10'
image: assets/featured-image.jpg
categories:
  - deploy
  - ci/cd
---

Desde o ano passado, utilizo a plataforma Netlify para hospedar toda e qualquer aplicação web que eu crio pelo simples motivo de: é simples, prático e a configuração é indolor.

Para você configurar o deploy de um site lá, tudo que você precisa fazer é conectar teu Github com o Netlify, selecionar o repositório, especificar o comando de _build_ do projeto, a pasta que os arquivos criados estarão e vualá, seu projeto está no ar.

Além de um deploy automatico, já é configurado pra você que qualquer pull request feito, será feito um `deploy preview` que vai construir teu site e colocar numa URL diferente para que você possa verificar se as mudanças propostas estão funcionando como esperado.

> Colocar o artigo do post do netlifiy

## Um problema por outro

No meu dia-a-dia de trabalho eu trabalho, toda nova funcionalidade, fix ou qualquer coisa que eu faça, eu preciso criar um PullRequest, onde meu colega vai avaliar as mudanças (code review), meu código vai passar por uma bateria de testes automatizados na nuvem (Continuous Integration) e quando aprovado, o deploy é feito também na nuvem (Continuous Deployment).

O grande lado positivo disso é que eu consigo facilmente identificar quando a funcionalidade X ou o bug foi introduzido e reverter todas as mudanças se for necessário.

Para além disso,
