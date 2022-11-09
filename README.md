Final project report 
For your final projects, both in-house and Tech for Better, you’ll write a detailed README on the project.

The following sections are required. Your report is supposed to demonstrate a certain set of knowledge, skills and behaviours. These are listed alongside the relevant questions as quotes.
## Object returned by recipe API
<img width="1134" alt="Screenshot 2022-11-09 at 12 19 25" src="https://user-images.githubusercontent.com/2411572/200898407-fb51acc3-7fca-4d85-a941-fd5600a4c58c.png">
## Array we are populating from recipes fetch (1 fetch per vegetable as param for recepies)

```javascript
fetched: [
    {
      label: 'Roasted Apples',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/a8c/a8cbde5520315fa9d8d6adbfbd6ed33e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170011Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab03fb5fc12b47457387a1c6fbc0374d801044dbe0eaa6016aa2ec5a56d84afa',
      ingredientLines: [Array],
      url: 'http://notwithoutsalt.com/roasted-apples/'
    },
    {
      label: 'Aubergine Pie',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/2da/2daf316167d8f4cc55002bfc090364b3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170011Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c5adb189e9c824274b353934efbcfb963358d8db837afeaa838cb3505c76e25',
      ingredientLines: [Array],
      url: 'https://food52.com/recipes/660-aubergine-pie'
    },
    {
      label: 'Hot beetroot salad',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/0fd/0fdcd6711ce0638a389d5bd45147d01c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170011Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71e3e4108a0fac2f2b71bd080bde4b73c2cbdd19baf954c65c4f4d9131c8e492',
      ingredientLines: [Array],
      url: 'https://www.bbcgoodfood.com/recipes/hot-beetroot-salad'
    },
    {
      label: 'Pickled Blackberries',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/ad9/ad9a3c85bb54f8e09dbaaa94348fb60b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f63b3f373bc36126d780a497dfe0f0fb91571afe2916a62cc643a7989de0099b',
      ingredientLines: [Array],
      url: 'https://www.epicurious.com/recipes/food/views/pickled-blackberries'
    },
    {
      label: 'Broccoli with Parmesan',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/aa3/aa355bf0fe1c57b123d10dcd6b51e46b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5f1e8f1ad358e069ce2ee5742bc659c861d667b256f68b10d2cb26fbaaad7e0',
      ingredientLines: [Array],
      url: 'https://www.marthastewart.com/1155293/broccoli-parmesan'
    },
    {
      label: 'Pan-Browned Brussel Sprouts',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/48b/48bd8217f8d3cb02a1bfb00e6e2f6cfe.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06ca02e068dd2e0dfa258220969bd1b550383c4b62bd617304da933d0133962c',
      ingredientLines: [Array],
      url: 'http://smittenkitchen.com/2006/12/i-never-promised-you-maturity/'
    },
    {
      label: 'Butternut Squash Puree',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf8fe5a00054492b85358d4d53f86e1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2eb7aed510aaa1cd17e8f43e3d8efc02eed0acce5e8dd6c39e1bc69e3b7685e',
      ingredientLines: [Array],
      url: 'http://thepioneerwoman.com/cooking/2007/11/butternut_squash_puree_try_it_or_ill_deck_ya_/'
    },
    {
      label: 'Glazed Carrots',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/be7/be73f5e5392d11c3bbdc56fe6c81f09a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170013Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0fa385e7a083208b6c3cf1c9aaf3e20d7a521daec349c9c41ec2495411de1fdb',
      ingredientLines: [Array],
      url: 'http://www.seriouseats.com/recipes/2010/11/glazed-carrots-recipe.html'
    },
    {
      label: 'Blanched Cauliflower',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/32d/32dd6b52adc27483abcb7b828c3b94c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170013Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=decbc8d6601f43504cfa211ba403c1942fd8948cd37331e238d792bb6d11c793',
      ingredientLines: [Array],
      url: 'https://www.marthastewart.com/1049672/blanched-cauliflower'
    },
    {
      label: 'Celeriac Coleslaw',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/d2a/d2a27f7e787f79d45dde19dd01ed9d58.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJGMEQCIGCwf%2BRMjx2%2FtOIqo3ARP0lXS4IcFpy%2B%2Bs22GztDUVxSAiBRRlVuPe8ML%2Fg%2FbuWkIQQ3r0%2BYFU1Utykjdl8nLrK0RSrMBAhgEAAaDDE4NzAxNzE1MDk4NiIMr3sDuz0BUmH8J4YoKqkEanU8QoMUSvXaN1p%2F4MXgiaxrDEyaTAKIlwQuUdDnGyG7OJNdrVwz%2Fl3zGxL8iXmygvzZPMTFpcXfOtcZwHzHaCMAEzD%2B8Uqnfffy4rmv9yoi6iHPBDgIJgXNeLRl2A%2BkaSZ%2Bi5518QPElC4uBH7a0%2F88tQSkWjVWK2llsoRIpevaxIYOb%2B8t2tb8aKsjkkT1bRuBXk9wUbjbvaf6cTfj%2F%2Btyvr9OqKT54YpXvwGtpXSExtUfXff%2BaVMBSoFTK8SZaFGndkm47FCoDP%2BQiNaNagMc8LfyO7qEQtKZMG%2Bv3VNn%2Fe8OVi2TSSWqbM7niw8V4480GyDhVT7rl7C9G26IUubsZAn7M6s65lBiXVWSXlc%2BYGgjsv5uTMxq1514WLdBVxQveA08bu0MVjfVZ7qEEDbUIUvux3EOjWT%2Br1hcA1uiEcU7UZQCOATjP45z2EmX1LOmtNPiRt%2BAJwHWygQiAB9r2A6DSP2u9tXLC0TSUEaUFFF4xcAkkT7JyZL0tGGV%2Bi08sJ57azULP6B%2FaDr9ocDVkRhdBuiVmGpBHBHSQSg7yujScAMF1H%2Fc0iliDGgXLsOsOM43OHm7ibU66w70BNsFxToifbzz77lKvRTVBxlFlv2NA69%2FkFQA%2FXm89wlyLofzPxwoppV4%2BP6aHJpat1tGk3Cwy%2FVybYWmL8ABCIGieIkLz5QGvzbOu%2Fxart8KtDAHUIB4sa%2BSjTd4dkB1I%2BXqKF%2BiVdw6ljDIh6%2BbBjqqAUupfAKKjBj%2Fp8JLGT3mcOpgYNK9Jd6x7TaGXO%2BxP9hb2AK46DWgqIGeIS7Td3XmzlpyZisuA%2BHEVZ0JdFF%2BLALMLyVPkyk05zR4ukKr%2F9LyCjqI%2FMj1Cxkdc5e7uFvOeHUWXVJyvZYIWave%2FmYTdi%2BC0aW%2BFH6OJhOeJ5EM0KMccQ2BaHjcDGmA0hkt8jRReZCtyvSU1VjsFR78LggXWf9XhSXtW5JL5F3P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170013Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHF74Y72%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f73e39f486a4bbd21cc9f1e8ea6e02ffe274579663a44300ace893eaa7f34ee2',
      ingredientLines: [Array],
      url: 'http://www.bbcgoodfood.com/recipes/5136/'
    }
  ]

```
Introduction 
What are you building?
Why are you building it?
Project scope 
What are you not building?
How did you decide what features were important?
Project plan 
How are you going to structure your sprints?
What order are you going to build in?
How did user research inform your plan?
Requirement analysis 
How will you ensure your project is accessible to as many users as possible?
Are there any legal or regulatory requirements you should consider?
Project learnings 
Did your team work effectively?
What would you do differently next time?
Research and findings 
What did you find out from user testing?
Project outcomes 
Were your assumptions right or wrong?
Recommendations and conclusions 
What features would you prioritise to build next?
Was the project a success?
Software Development Lifecycle stages 
Planning 
What roles did your team take on?
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

Did these roles help your team work effectively?
Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

Analysis 
What might be the intended and unintended consequences of building this product?
Design 
How did you plan a user experience?
What technical decisions did you make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

Implementation/Build 
How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

Test 
How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6)

Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4)

Deploy 
Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

What problems did you encounter during deployment?
Maintain 
Is it easy for someone make changes to the codebase?
Could a new person quickly be onboarded to contribute?
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

