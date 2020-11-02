# Graphics Matplotlib in markdown file


## code python
```{r,engine='python'}
import numpy as np
import matplotlib.pyplot as plt

n = 256
X = np.linspace(-np.pi,np.pi,n,endpoint=True)
Y = np.sin(2*X)

fig, ax = plt.subplots( nrows=1, ncols=1 )
ax.plot (X, Y+1, color='blue', alpha=1.00)
ax.plot (X, Y-1, color='blue', alpha=1.00)
#plt.show()
fig.savefig('foo.png', bbox_inches='tight')
print "finished"
```
Output image:
![output](foo.png)
