Vue.component("survey", {
  data: function () {
    return {
      currentValue: this.value,
      nextStepBtn: true,
      submitBtn: true,
      firstScore: [],
      secondScore: [],
    };
  },
  props: {
    surveys: {
      type: Array,
      default: "",
    },
    value: {
      type: Number,
      default: 1,
    },
    // firstScore: {
    //   type: Number,
    //   default: 0,
    // },
    // secondScore: {
    //   type: Number,
    //   default: 0,
    // },
    a: {
      type: String,
      default: "",
    },
    b: {
      type: String,
      default: "",
    },
    c: {
      type: String,
      default: "",
    },
    d: {
      type: String,
      default: "",
    },
    e: {
      type: String,
      default: "",
    },
    f: {
      type: String,
      default: "",
    },
    g: {
      type: String,
      default: "",
    },
    h: {
      type: String,
      default: "",
    },
    i: {
      type: String,
      default: "",
    },

    j: {
      type: String,
      default: "",
    },
    k: {
      type: String,
      default: "",
    },
    l: {
      type: String,
      default: "",
    },
    m: {
      type: String,
      default: "",
    },
    n: {
      type: String,
      default: "",
    },
    o: {
      type: String,
      default: "",
    },
    p: {
      type: String,
      default: "",
    },
    q: {
      type: String,
      default: "",
    },
    r: {
      type: String,
      default: "",
    },
    // introduce: {
    //   type: String,
    //   default: "",
    //   minLength: 100,
    // },
    activeColor: {
      type: String,
      default: "activeColor",
    },
    disableColor: {
      type: String,
      default: "disableColor",
    },
  },
  template:
    "<div>" +
    '   <div id="title">' +
    '       <slot  name="surveyTitle" v-for="survey in surveys" :survey-id="survey.id" :survey-type="survey.type" :survey-topic="survey.topic" :survey-title="survey.title" :survey-value="survey.value"></slot>' +
    "   </div>" +
    '   <my-button v-model="currentValue" style="width:100%;display:flex">' +
    '   <div style="display:flex;margin:40px auto">' +
    '        <button :class="activeColor" v-if="currentValue <= surveys.length && currentValue != 1" @click="upStep(currentValue-2)" style="width:200px;height:70px;display:block;margin:0 50px;font-size:26px;background:#F0CD73;border-radius:15px">上一步</button>' +
    '        <button :class="[nextStepBtn?disableColor:activeColor]" v-if="currentValue != surveys.length + 1 && currentValue != surveys.length" :disabled="nextStepBtn" @click="nextStep(currentValue)" style="width:200px;height:70px;display:block;margin:0;font-size:26px;background:#F0CD73;border-radius:15px">下一步</button>' +
    '        <button v-if="currentValue == surveys.length" :disabled="submitBtn" @click="submit" style="width:200px;height:70px;display:block;margin:0;font-size:26px;background:#F0CD73;border-radius:15px">提交</button>' +
    '    </div>' +
    "    </my-button>" +
    "</div>",
  methods: {
    nextStep: function (id) {
      this.checkStatus(id);
      this.currentValue++;
    },
    upStep: function (id) {
      this.checkStatus(id);
      this.currentValue--;
    },
    // reset: function () {
    //   this.$parent.a = "";
    //   this.$parent.b = [];
    //   this.$parent.introduce = "";
    //   alert("重置成功");
    // },
    submit: function () {
      // let a = this.$parent.a;
      // let b = this.$parent.b;
      // let c = this.$parent.c;
      // alert("提交:\ra:" + a + "\rb:" + b + "\rintroduce" + introduce);
      this.$emit('score-calculate', this.firstScore, this.secondScore);
    },
    //下一步按钮是否置灰
    checkStatus: function (id) {
      let index = this.surveys[id].topic;
      if (this[index] != "") {
        this.nextStepBtn = false;
      } else {
        this.nextStepBtn = true;
      }
    },
    mapFirstScore: function(param, index) {
      if (param == '从不') {
        this.firstScore[index] = 0;
      } else if (param == '偶尔') {
        this.firstScore[index] = 1;
      } else if (param == '经常') {
        this.firstScore[index] = 2;
      } else if (param == '总是') {
        this.firstScore[index] = 3;
      }
    },
    mapSecondScore: function(param, index) {
      if (param == '从不') {
        this.secondScore[index] = 0;
      } else if (param == '偶尔') {
        this.secondScore[index] = 1;
      } else if (param == '经常') {
        this.secondScore[index] = 2;
      } else if (param == '总是') {
        this.secondScore[index] = 3;
      }
    }
  },
  created: function () {
    this.nextStepBtn = true;
  },
  watch: {
    currentValue: function (val) {
      this.$emit("input", val);
    },
    a: function () {
      if (this.a.length > 0) {
        this.mapFirstScore(this.a, '0');
        this.nextStepBtn = false;
      }
    },
    b: function () {
      if (this.b.length > 0) {
        this.mapFirstScore(this.b, '1');
        this.nextStepBtn = false;
      }
    },
    c: function () {
      if (this.c.length > 0) {
        this.mapFirstScore(this.c, '2');
        this.nextStepBtn = false;
      }
    },
    d: function () {
      if (this.d.length > 0) {
        this.mapFirstScore(this.d, '3');
        this.nextStepBtn = false;
      }
    },
    e: function () {
      if (this.e.length > 0) {
        this.mapFirstScore(this.e, '4');
        this.nextStepBtn = false;
      }
    },
    f: function () {
      if (this.f.length > 0) {
        this.mapFirstScore(this.f, '5');
        this.nextStepBtn = false;
      }
    },
    g: function () {
      if (this.g.length > 0) {
        this.mapFirstScore(this.g, '6');
        this.nextStepBtn = false;
      }
    },
    h: function () {
      if (this.h.length > 0) {
        this.mapFirstScore(this.h, '7');
        this.nextStepBtn = false;
      }
    },
    i: function () {
      if (this.i.length > 0) {
        this.mapFirstScore(this.i, '8');
        this.nextStepBtn = false;
      }
    },
    j: function () {
      if (this.j.length > 0) {
        this.mapSecondScore(this.j, '0');
        this.nextStepBtn = false;
      }
    },
    k: function () {
      if (this.k.length > 0) {
        this.mapSecondScore(this.k, '1');
        this.nextStepBtn = false;
      }
    },
    l: function () {
      if (this.l.length > 0) {
        this.mapSecondScore(this.l, '2');
        this.nextStepBtn = false;
      }
    },
    m: function () {
      if (this.m.length > 0) {
        this.mapSecondScore(this.m, '3');
        this.nextStepBtn = false;
      }
    },
    n: function () {
      if (this.n.length > 0) {
        this.mapSecondScore(this.n, '4');
        this.nextStepBtn = false;
      }
    },
    o: function () {
      if (this.o.length > 0) {
        this.mapSecondScore(this.o, '5');
        this.nextStepBtn = false;
      }
    },
    p: function () {
      if (this.p.length > 0) {
        this.mapSecondScore(this.p, '6');
        this.nextStepBtn = false;
      }
    },
    q: function () {
      if (this.q.length > 0) {
        this.mapSecondScore(this.q, '7');
        this.nextStepBtn = false;
      }
    },
    r: function () {
      debugger;
      if (this.r.length > 0) {
        this.mapSecondScore(this.r, '8');
        this.nextStepBtn = false;
        this.submitBtn = false;
      }
    },
    // introduce: function (val) {
    //   if (val.length > 100) {
    //     this.submitBtn = false;
    //   }
    // },
    nextStepBtn: function () {},
  },
});
