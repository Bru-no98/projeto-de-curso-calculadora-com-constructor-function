function Calculadora() {
    
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.pressEnter();
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn__num'))
                this.btnPataDisplay(el);

            if (el.classList.contains('btn__clear'))
                this.limpaDisplay();

            if (el.classList.contains('btn__del'))
                this.apagaNumero();

            if(el.classList.contains('btn__eq'))
                this.realizaCalculo();
        });

        
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.key === "Enter" ) {
                this.realizaCalculo();
            }
        });
    }

    this.realizaCalculo = () => {
        let algarismos = this.display.value;
      if(algarismos.indexOf("+") != -1) {
        const [valor1, valor2] = algarismos.split('+')
        this.display.value = Number(valor1) + Number(valor2);
      };

      if(algarismos.indexOf("-") != -1) {
        const [valor1, valor2] = algarismos.split('-')
        this.display.value = Number(valor1) - Number(valor2);
      };

      if(algarismos.indexOf("*") != -1) {
        const [valor1, valor2] = algarismos.split('*')
        this.display.value = Number(valor1) * Number(valor2);
      };

      if(algarismos.indexOf("/") != -1) {
        const [valor1, valor2] = algarismos.split('/')
        this.display.value = Number(valor1) / Number(valor2);
      };
    }

    this.apagaNumero = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    
    this.limpaDisplay = () => {
        this.display.value = '';
    }

    this.btnPataDisplay = (btn) => {
        const valor = btn.innerText;
        this.display.value += valor;
        this.display.focus();
    }
};

const obj = new Calculadora();
obj.inicia();