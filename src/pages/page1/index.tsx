import Taro, { Component, SelectorQuery } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

export default class Page1 extends Component {
  constructor() {
    console.log(22222);
  }
  handleClick = () => {
    console.log(this, this.$scope);
    const query: SelectorQuery = Taro.createSelectorQuery().in(this.$scope);
    query
      .select("#anchor")
      .boundingClientRect()
      .exec(rect => {
        console.log(rect);
      });
  };
  render() {
    return (
      <View ref="page11">
        <Button onClick={this.handleClick}>Go To anchor</Button>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box anchor" id="anchor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
        <View className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab
          alias ad nemo mollitia laudantium, sequi repellat tempora dolorem eos
          atque eaque, autem asperiores excepturi quibusdam, repudiandae facere
          facilis dolor.
        </View>
      </View>
    );
  }
}
