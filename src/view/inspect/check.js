export const checkInfo = (value) => {
  let check = {
    'bare-pod': '裸Pod',
    'fully-qualified-image': '完全合格的镜像名(FQIN)',
    'latest-tag': '镜像Latest标签',
    'resource-requirements': '资源配额',
    'liveness': '存活探针',
    'readiness': '就绪探针',
    'default-namespace': '默认命名空间',
    'admission-controller-webhook': '准入控制Webhook',
    'hostpath-volume': '卷挂载(主机路径)',
    'node-name-pod-selector': 'Pod节点选择标签',
    'node-labels': '节点自定义标签',
    'metric-server': 'Metric Server',
    'unused-service-account': '无用的服务账户',
    'unused-config-map': '无用的ConfigMap',
    'unused-secret': '无用的Secret',
    'unused-pv': '无用的PV',
    'unused-pvc': '无用的PVC',
    'unused-hpa': '无用的HPA',
    'unused-cluster-role': '无用的集群角色',
    'unused-cluster-role-binding': '无用的集群角色绑定',
    'unused-role': '无用的角色',
    'unused-role-binding': '无用的角色绑定',
    'unused-service': '无用的服务',
    'unused-replica-set': '无用的副本集',
    'unused-pod-disruption-budget': '无用的Pod中断预算',
    'unused-pod-preset': '无用的Pod预设',
    'namespace-state': '命名空间状态',
    'pod-state': 'Pod状态',
    'node-state': '节点状态',
    'container-state': '容器状态',
    'component-state': '组件状态',
    'api-server': 'API Server',
    'controller-manager': 'Controller Manager',
    'scheduler': 'Scheduler',
    'etcd': 'Etcd',
    'privileged-containers': '特权容器',
    'non-root-user': '容器运行权限'
  }
  return check[value]
}
