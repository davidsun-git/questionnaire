Vue.component("survey", {
  data: function () {
    return {
      currentValue: this.value,
      nextStepBtn: true,
      submitBtn: true,
    };
  },
  props: {
    surveys: {
      type: Object,
      default: "",
    },
    value: {
      type: Number,
      default: 1,
    },
    a: {
      type: Number,
      default: Infinity,
    },
    b: {
      type: Number,
      default: Infinity,
    },
    c: {
      type: Number,
      default: Infinity,
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
    '   <my-button v-model="currentValue">' +
    '        <button :class="activeColor" v-if="currentValue <= surveys.length && currentValue != 1" @click="upStep(currentValue-2)">上一步</button>' +
    '        <button :class="[nextStepBtn?disableColor:activeColor]" v-if="currentValue != surveys.length + 1" :disabled="nextStepBtn" @click="nextStep(currentValue)">下一步</button>' +
    '        <button v-if="currentValue == surveys.length" :disabled="submitBtn" @click="submit">提交</button>' +
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
      let a = this.$parent.a;
      let b = this.$parent.b;
      let c = this.$parent.c;
      alert(
        "提交:\ra:" + a + "\rb:" + b + "\rintroduce" + introduce
      );
    },
    //优化下一步按钮是否置灰问题
    checkStatus: function (id) {
      if ("b" == this.surveys[id].topic) {
        if (this.b.length > 0) {
          this.nextStepBtn = false;
        } else {
          this.nextStepBtn = true;
        }
      } else if ("a" == this.surveys[id].topic) {
        if (this.a.length > 0) {
          this.nextStepBtn = false;
        } else {
          this.nextStepBtn = true;
        }
      } else if ("c" == this.surveys[id].topic) {
        if (this.c.length > 0) {
          this.nextStepBtn = false;
        } else {
          this.nextStepBtn = true;
        }
      }
    },
  },
  created: function () {
    this.nextStepBtn = true;
  },
  watch: {
    currentValue: function (val) {
      this.$emit("input", val);
    },
    a: function () {
      debugger
      if (this.a.length > 0) {
        this.nextStepBtn = false;
      }
    },
    b: function () {
      if (this.b.length > 0) {
        this.nextStepBtn = false;
      }
    },
    c: function () {
      debugger;
      if (this.c.length > 0) {
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
