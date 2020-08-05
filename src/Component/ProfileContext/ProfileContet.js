import React, { createContext } from 'react'

const ProfileContext = createContext({
    userProfile: '123',
})



export class ProfileProvider extends React.Component {
    // 注意书写顺序；handleToggle 作为箭头函数不能 bind 因此需要写在上面；如果不喜欢这样的顺序则可以书写普通函数放在下面但记得 bind

    // 2-1. 重写 state 
    state = {
        userProfile: '123',
    }

    render() {
        // 2-2. 通过 Provider 组件的 value 将 state 提供出去
        return (
            <ProfileContext.Provider value={this.state}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}

// 3. 创建 Consumer
export const ProfileConsumer = ProfileContext.Consumer

