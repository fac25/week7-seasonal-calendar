Final project report 
For your final projects, both in-house and Tech for Better, you’ll write a detailed README on the project.

The following sections are required. Your report is supposed to demonstrate a certain set of knowledge, skills and behaviours. These are listed alongside the relevant questions as quotes.
## Object returned by recipe API
<img width="1134" alt="Screenshot 2022-11-09 at 12 19 25" src="https://user-images.githubusercontent.com/2411572/200898407-fb51acc3-7fca-4d85-a941-fd5600a4c58c.png">
## Array we are populating from recipes fetch (1 fetch per vegetable as param for recepies) Only 10 vegs as per API limitations for free account

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

# seasonal calendar

## Introduction

#### What are you building?

We are buliding a website for users to view vegetables and fruits that are in season in the UK. The user will have access to a seasonal calendar to know the 'in season' fruits and vegetables for the current month. 

The user will be able to access recipes based on those fruites and vegetables and learn the nutritional benefits  

#### Why are you building it?

Seasonal produce generally requires fewer chemicals and the food miles are often significantly lower as product is grown more locally. This keeps the environmental impact, as well as the cost lower.

The other websites showing a seasonal calendar don't have displays the data in an engaging way.

## Project scope 


#### What are you not building?

- We are not building a global seasonal calendar where users can pick their location.
- We are not building a React native app.
- We are not building a clone of an existing website.


#### How did you decide what features were important?


- We run a discovery session to understand what problem our users are facing.
- We conducted a user research session interviewing eight people in which we presented the possible features and were open to suggestions too.
- We then analysed the feedback from the user research and the discovery session to define who our users were, what was their problem and how this app would solve those issues.


## Project plan 

#### How are you going to structure your sprints?

We are working in 1-week sprints and plan on holding daily stand-ups. We will assign issues and pair programme. 

#### What order are you going to build in?

We're focusing on building our MVP first, which means a website that lists seasonal vegetables, with a calndar overview, some suggested recipes and overview pages of the individual vegetables. We're planning on building tests as we go and if we accomplish all this focus on stretch goals, which yet have to be discussed. 

#### How did user research inform your plan?

We conducted user research before building this project twice. First we did a qualitative analysis of the users' needs and what features they would like to see on the website, and what they find helpful. We considered these answers in the following design process, to come up with an idea that is achieveable, but also meets our users needs. Following this we designed a prototype on [figma](https://www.figma.com/proto/4gFoWhl8lI1aAHv89E9CIt/Seasonal-Calendar?node-id=23%3A4&starting-point-node-id=23%3A4) and used it to conduct further user research, on whether our idea came across coherently and if the website is easy to understand.

## Requirement analysis 

#### How will you ensure your project is accessible to as many users as possible?
We will design our website and write code follow with A11y projects to make sure our website is accessible to as many users as possible

#### Are there any legal or regulatory requirements you should consider?

Not for our MVP. If we complete our stretch goal(s), we have to consider GDPR. 

## Project learnings 

#### Did your team work effectively?

#### What would you do differently next time?

## Research and findings 

#### What did you find out from user testing?

## Project outcomes 

#### Were your assumptions right or wrong?


## Recommendations and conclusions 

#### What features would you prioritise to build next?

#### Was the project a success?

### Software Development Lifecycle stages 

- Discovery
- User research
- Wireframing
- Design
- Usabily Testing
- Code planning
- Development

### Planning 

### What roles did your team take on?
UX/UI - Paz
Scrum - Joe
QA - Abby
DevOps - Lisa

### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)


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

